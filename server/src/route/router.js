const KoaRouter = require('koa-router')
const LoginRouter = require('../api/login')
const RegisterRouter = require('../api/register')
const CommonRouter = require('../api/common')

let routers = new KoaRouter()

routers.use('/login', LoginRouter.routes(), LoginRouter.allowedMethods())
routers.use('/register', RegisterRouter.routes(), RegisterRouter.allowedMethods())
routers.use('/common', CommonRouter.routes(), CommonRouter.allowedMethods())

module.exports = routers