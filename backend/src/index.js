require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
// const multer = require('koa-multer')
// const serve = require('koa-static')

const db = require('./database')

const api = require('./api')
const jwtMiddleware = require('lib/middlewares/jwt')

db.connect()

const { Port: port } = process.env

const app = new Koa()

app.use(jwtMiddleware)
app.use(bodyParser())
app.use(koaBody({ multipart: true }))

const router = new Router()

// 라우터 설정
router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log('Listening to port 4000')
})