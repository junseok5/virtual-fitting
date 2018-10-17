const Router = require('koa-router')

const products = new Router()
const productsCtrl = require('./products.ctrl')

products.get('/', productsCtrl.getList)
products.get('/:id', productsCtrl.getProductInfo)
products.post('/', productsCtrl.writeProduct)
products.patch('/:id', productsCtrl.patchProduct)
products.delete('/:id'.productsCtrl.deleteProduct)

module.exports = products