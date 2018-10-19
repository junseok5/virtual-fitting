const Router = require('koa-router')

const users = new Router()
const usersCtrl = require('./users.ctrl')
const checkUserAuth = require('lib/middlewares/checkUserAuth')

users.get('/', checkUserAuth, usersCtrl.getUserInfo)
users.patch('/', checkUserAuth, usersCtrl.patchUserInfo)
users.delete('/', checkUserAuth, usersCtrl.deleteUserInfo)

module.exports = users