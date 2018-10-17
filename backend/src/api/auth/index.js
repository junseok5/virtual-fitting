const Router = require('koa-router')

const auth = new Router()
const authCtrl = require('./auth.ctrl')

auth.get('/exists/email/:email', authCtrl.checkEmail)
auth.post('/register/user/local', authCtrl.localRegisterUser)
auth.post('/register/user/:provider(facebook|google)', authCtrl.socialRegister)
auth.post('/register/seller/local', authCtrl.localRegisterSeller)
auth.post('/login/user/local', authCtrl.localUserLogin)
auth.post('/login/seller/local', authCtrl.localSellerLogin)
auth.post('/login/user/:provider(facebook|google)', authCtrl.socialLogin)
auth.get('/check', authCtrl.check)
auth.post('/logout', authCtrl.logout)

module.exports = auth