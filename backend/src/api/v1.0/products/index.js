const Router = require('koa-router')
const multer = require('koa-router-multer')

const products = new Router()
const productsCtrl = require('./products.ctrl')
const checkSellerAuth = require('lib/middlewares/checkSellerAuth')
const upload = multer({ dest: 'uploads/' })

products.get('/', productsCtrl.getList)
products.get('/:id', productsCtrl.getProductInfo)
products.post('/', upload.fields([{
  name: 'modelPhoto', maxCount: 1
}, {
  name: 'productPhoto', maxCount: 1
}]), checkSellerAuth, productsCtrl.writeProduct)
products.patch('/:id', checkSellerAuth, productsCtrl.patchProduct)
products.delete('/:id', checkSellerAuth, productsCtrl.deleteProduct)

module.exports = products