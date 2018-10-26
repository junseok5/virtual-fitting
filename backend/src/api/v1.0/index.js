const Router = require('koa-router')

const auth = require('./auth')
const products = require('./products')
const sellers = require('./sellers')
const users = require('./users')
const files = require('./files')

const api = new Router()

api.use('/auth', auth.routes())
api.use('/products', products.routes())
api.use('/sellers', sellers.routes())
api.use('/users', users.routes())
api.use('/files', files.routes())

module.exports = api