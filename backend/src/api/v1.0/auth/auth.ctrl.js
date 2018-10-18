const Joi = require('joi')
const User = require('database/models/User')
const Seller = require('database/models/Seller')
const { getProfile } = require('lib/social')

// Regex definition
const displayNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,12}$/

exports.localRegisterUser = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    displayName: Joi.string().regex(displayNameRegex).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phoneNum: Joi.string(),
    gender: Joi.string()
  })

  const result = Joi.validate(body, schema)

  // Schema Error
  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const { displayName, email, password, phoneNum, gender } = body

  try {
    // check email
    const exists = await User.findExistancy({ email })

    if (exists) {
      ctx.status = 409
      ctx.body = 'email'
      return
    }

    const user = await User.localRegister({
      email, password, displayName, phoneNum, gender
    })

    ctx.body = {
      _id: user._id
    }

    const accessToken = await user.generateToken()

    // configure accessToken to httpOnly cookie
    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    })
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.socialRegister = async (ctx) => {
  const { body } = ctx.request
  const { provider } = ctx.params

  const schema = Joi.object({
    displayName: Joi.string().regex(displayNameRegex).required(),
    accessToken: Joi.string().required()
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const {
    displayName,
    accessToken
  } = body

  // get social info
  let profile = null
  try {
    profile = await getProfile(provider, accessToken)
  } catch (e) {
    ctx.status = 403
    return
  }
  if (!profile) {
    ctx.status = 403
    return
  }

  const {
    email,
    id: socialId
  } = profile

  // check email
  if (profile.email) {
    // will check only email exists
    try {
      const exists = await User.findByEmail(profile.email)
      if (exists) {
        ctx.body = {
          key: 'email'
        }
        ctx.status = 409
        return
      }
    } catch (e) {
      ctx.throw(e, 500)
    }
  }

  let user = null
  try {
    user = await User.socialRegister({
      email,
      displayName,
      provider,
      accessToken,
      socialId
    })
  } catch (e) {
    ctx.throw(e, 500)
  }

  ctx.body = {
    displayName,
    _id: user._id
  }
}

exports.localUserLogin = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30)
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    return
  }

  const { email, password } = body

  try {
    // find user
    const user = await User.findByEmail(email)

    if (!user) {
      // user does not exist
      ctx.status = 403
      return
    }

    const validated = user.validatePassword(password)
    if (!validated) {
      // wrong password
      ctx.status = 403
      return
    }

    const accessToken = await user.generateToken()

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })

    const { displayName, _id } = user

    ctx.body = {
      _id,
      displayName
    }
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.socialLogin = async (ctx) => {
  const schema = Joi.object().keys({
    accessToken: Joi.string().required()
  })

  const result = Joi.validate(ctx.request.body, schema)

  if (result.error) {
    ctx.status = 400
    return
  }

  const { provider } = ctx.params
  const { accessToken } = ctx.request.body

  // get social info
  let profile = null
  try {
    profile = await getProfile(provider, accessToken)
  } catch (e) {
    ctx.status = 403
    return
  }

  if (!profile) {
    ctx.status = 403
    return
  }

  const {
    id, email
  } = profile

  // check acount existancy
  let user = null
  try {
    user = await User.findSocialId({ provider, id })
  } catch (e) {
    ctx.throw(e, 500)
  }

  if (user) {
    // set user status
    try {
      const vfToken = await user.generateToken()
      ctx.cookies.set('access_token', vfToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
      })
    } catch (e) {
      ctx.throw(e, 500)
    }
    const { _id, displayName } = user
    ctx.body = {
      displayName,
      _id
    }
    return
  }

  if (!user && profile.email) {
    let duplicated = null
    try {
      duplicated = await User.findByEmail(email)
    } catch (e) {
      ctx.throw(e, 500)
    }

    // if there is a duplicated email, merges the user account
    if (duplicated) {
      duplicated.social[provider] = {
        id,
        accessToken
      }
      try {
        await duplicated.save()
      } catch (e) {
        ctx.throw(e, 500)
      }
      try {
        // set user status
        const vfToken = await duplicated.generateToken()
        ctx.cookies.set('access_token', vfToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7
        })
      } catch (e) {
        ctx.throw(e, 500)
      }
      const { _id, displayName } = duplicated
      ctx.body = {
        displayName,
        _id
      }
    }
  }

  // If user does first social login, response 204 status
  // Client may receive 204 status. It will be moved to register page.
  if (!user) {
    ctx.status = 204
  }
}

exports.localRegisterSeller = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    crn: Joi.string().required(),
    companyName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30),
    managerName: Joi.string().regex(displayNameRegex).required(),
    phoneNum: Joi.string().required()
  })

  const result = Joi.validate(body, schema)

  // Schema error
  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const { crn, companyName, email, password, managerName, phoneNum } = body

  try {
    // check email / crn
    const exists = await Seller.findExistancy({
      crn, email
    })

    if (exists) {
      ctx.status = 409
      const key = exists.crn === crn ? 'crn' : 'email'
      ctx.body = {
        key
      }
      return
    }

    // creates seller account
    const seller = await Seller.localRegister({
      crn, companyName, email, password, managerName, phoneNum
    })

    ctx.body = {
      _id: seller._id,
      companyName
    }

    const accessToken = await seller.generateToken()

    // configure accessToken to httpOnly cookie
    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.localSellerLogin = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20)
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    return
  }

  const { email, password } = body

  try {
    // find seller
    const seller = await Seller.findByEmail(email)

    if (!seller) {
      // seller does not exist
      ctx.status = 403
      return
    }

    const validated = seller.validatePassword(password)
    if (!validated) {
      // wrong password
      ctx.status = 403
      return
    }

    const accessToken = await seller.generateToken()

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })

    const { _id, managerName } = seller

    ctx.body = {
      _id,
      managerName
    }
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.checkUser = async (ctx) => {
  const { user } = ctx.request

  if (!user) {
    ctx.status = 401
    return
  }

  try {
    const exists = await User.findById(user._id)
    if (!exists) {
      // invalid user
      ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
      })
      ctx.status = 401
      return
    }
  } catch (e) {
    ctx.throw(500, e)
  }

  ctx.body = {
    user
  }
}

exports.checkSeller = async (ctx) => {
  const { seller } = ctx.request

  if (!seller) {
    ctx.status = 401
    return
  }

  try {
    const exists = await Seller.findById(seller._id)
    if (!exists) {
      // invalid user
      ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
      })
      ctx.status = 401
      return
    }
  } catch (e) {
    ctx.throw(500, e)
  }

  ctx.body = {
    seller
  }
}

exports.logout = (ctx) => {
  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  })
  ctx.status = 204
}