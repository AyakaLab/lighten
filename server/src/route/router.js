const KoaRouter = require('koa-router')
const LoginRouter = require('../api/login')
const RegisterRouter = require('../api/register')

let routers = new KoaRouter()

routers.use('/login', LoginRouter.routes(), LoginRouter.allowedMethods())
routers.use('/register', RegisterRouter.routes(), RegisterRouter.allowedMethods())

module.exports = routers