const KoaRouter = require('koa-router')
const LoginController = require('../controllers/login')

let LoginRouters = new KoaRouter()

LoginRouters.post('/', LoginController.postLogin)

module.exports = LoginRouters