require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const api = require('./api')
const db = require('./database/db')

db.connect()

const { Port: port } = process.env

const app = new Koa()
const router = new Router()

// 라우터 설정
router.use('/api', api.routes())

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log('Listening to port 4000')
})