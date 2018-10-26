const Router = require('koa-router')

const files = new Router()
const filesCtrl = require('./files.ctrl')
const checkUserAuth = require('lib/middlewares/checkUserAuth')
const checkSellerAuth = require('lib/middlewares/checkSellerAuth')

files.post('/users-photo', checkUserAuth, filesCtrl.uploadUserPhoto)
files.post('/products/main-photo', checkSellerAuth, filesCtrl.uploadProductsMainPhoto)
files.post('/products/model-photo', checkSellerAuth, filesCtrl.uploadProductsModelPhoto)

module.exports = files