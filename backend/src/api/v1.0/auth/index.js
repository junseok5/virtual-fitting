const Router = require('koa-router')

const auth = new Router()
const authCtrl = require('./auth.ctrl')

// auth.get('/exists/email/:email', authCtrl.checkEmail)

auth.post('/users/register/local', authCtrl.localRegisterUser)
auth.post('/users/register/:provider(facebook|google)', authCtrl.socialRegister)
auth.post('/users/login/local', authCtrl.localUserLogin)
auth.post('/users/login/:provider(facebook|google)', authCtrl.socialLogin)

auth.post('/sellers/register/local', authCtrl.localRegisterSeller)
auth.post('/sellers/login/local', authCtrl.localSellerLogin)

// auth.get('/check', authCtrl.check)
// auth.post('/logout', authCtrl.logout)

module.exports = auth