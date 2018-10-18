const { generateToken, decodeToken } = require('lib/token')

module.exports = async (ctx, next) => {
  const token = ctx.cookies.get('access_token')
  if (!token) {
    // if there is no token, skip!
    ctx.request.user = null
    ctx.request.seller = null
    return next()
  }

  try {
    const decoded = await decodeToken(token)
    const { user, seller } = decoded

    let isUser = null
    if (user) isUser = true
    else isUser = false

    // re-issue token when its age is over 3days
    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 3) {
      let freshToken = null
      if (isUser) {
        // generate user token
        freshToken = await generateToken({ user }, 'user')
      } else {
        // generate seller token
        freshToken = await generateToken({ seller }, 'seller')
      }
      // const freshToken = await generateToken({ user }, 'user')
      ctx.cookies.set('access_token', freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7
      })
    }
    if (isUser) {
      ctx.request.user = user
    } else {
      ctx.request.seller = seller
    }
  } catch (e) {
    ctx.request.user = null
    ctx.request.seller = null
  }

  return next()
}