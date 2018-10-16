const Router = require('koa-router')

const auth = new Router()
const authCtrl = require('./auth.ctrl')

auth.post('/register/local', authCtrl.localRegister)
auth.post('/register/:provider(facebook|google)', authCtrl.socialRegister)
auth.post('/login/local', authCtrl.localLogin)
auth.post('/login/:provider(facebook|google)', authCtrl.socialLogin)
auth.get('/check', authCtrl.check)
auth.post('/logout', authCtrl.logout)