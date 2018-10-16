const Router = require('koa-router')

const seller = new Router()
const sellerCtrl = require('./seller.ctrl')

seller.get('/:id', sellerCtrl.getSellerInfo)
seller.patch('/:id', sellerCtrl.patchSellerInfo)
seller.delete('/:id', sellerCtrl.deleteSellerInfo)