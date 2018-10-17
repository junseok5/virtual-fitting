const Router = require('koa-router')

const users = new Router()
const usersCtrl = require('./users.ctrl')

users.get('/:id', usersCtrl.getUserInfo)
users.patch('/:id', usersCtrl.patchUserInfo)
users.delete('/:id', usersCtrl.deleteUserInfo)

module.exports = users