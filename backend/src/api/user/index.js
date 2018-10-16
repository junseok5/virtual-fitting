const Router = require('koa-router')

const user = new Router()
const userCtrl = require('./user.ctrl')

user.get('/:id', userCtrl.getUserInfo)
user.patch('/:id', userCtrl.patchUserInfo)
user.delete('/:id', userCtrl.deleteUserInfo)

module.exports = user