const KoaRouter = require('koa-router')
const CommonController = require('../controllers/common')

let CommonRouters = new KoaRouter()

CommonRouters.get('/logo', CommonController.getLogo)

module.exports = CommonRouters