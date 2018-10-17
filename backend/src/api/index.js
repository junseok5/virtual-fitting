const Router = require('koa-router')

const auth = require('./auth')
const products = require('./products')
const sellers = require('./sellers')
const users = require('./users')

const api = new Router()

api.use('/auth', auth.routes())
api.use('/products', auth.routes())
api.use('/sellers', auth.routes())
api.user('/users', auth.routes())

module.exports = api