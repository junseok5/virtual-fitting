const Router = require('koa-router')

const sellers = new Router()
const sellersCtrl = require('./sellers.ctrl')

sellers.get('/:id', sellersCtrl.getSellerInfo)
sellers.patch('/:id', sellersCtrl.patchSellerInfo)
sellers.delete('/:id', sellersCtrl.deleteSellerInfo)

module.exports = sellers