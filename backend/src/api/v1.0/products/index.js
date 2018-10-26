const Router = require('koa-router')

const products = new Router()
const productsCtrl = require('./products.ctrl')
const checkSellerAuth = require('lib/middlewares/checkSellerAuth')

products.get('/', productsCtrl.getList)
products.get('/:id', productsCtrl.getProductInfo)
products.post('/', checkSellerAuth, productsCtrl.writeProduct)
products.patch('/:id', checkSellerAuth, productsCtrl.patchProduct)
products.delete('/:id', checkSellerAuth, productsCtrl.deleteProduct)

module.exports = products