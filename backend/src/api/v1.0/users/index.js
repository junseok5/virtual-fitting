const Router = require('koa-router')
// const multer = require('koa-multer')

const users = new Router()
const usersCtrl = require('./users.ctrl')
const checkUserAuth = require('lib/middlewares/checkUserAuth')
// const upload = multer({ dest: 'uploads/' })

users.get('/', checkUserAuth, usersCtrl.getUserInfo)
users.post('/photo', checkUserAuth, usersCtrl.uploadPhoto)
users.patch('/', checkUserAuth, usersCtrl.patchUserInfo)
users.delete('/', checkUserAuth, usersCtrl.deleteUserInfo)

module.exports = users