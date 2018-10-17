const crypto = require('crypto')

const { PASSWORD_HASH_KEY: secret } = process.env

function hash (password) {
  return crypto.createHmac('sha256', secret).update(password).digest('hex')
}

module.exports = hash