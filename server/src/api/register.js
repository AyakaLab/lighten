const KoaRouter = require('koa-router')
const RegisterController = require('../controllers/register')

let RegisterRouters = new KoaRouter()

RegisterRouters.post('/code', RegisterController.postCode)

module.exports = RegisterRouters