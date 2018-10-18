const Router = require('koa-router')

const sellers = new Router()
const sellersCtrl = require('./sellers.ctrl')
const checkSellerAuth = require('lib/middlewares/checkSellerAuth')

sellers.get('/', checkSellerAuth, sellersCtrl.getSellerInfo)
sellers.patch('/', checkSellerAuth, sellersCtrl.patchSellerInfo)
sellers.delete('/', checkSellerAuth, sellersCtrl.deleteSellerInfo)

module.exports = sellers