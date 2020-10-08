const fs = require('fs')
const path = require('path')
const config = require('../../../config.json')

const Common = {
    async getLogo (ctx, next) {

        const type = {
            png: 'image/png',
            jpeg: 'image/jpeg',
            jpg: 'image/jpeg',
            webp: 'image/webp'
        }

        const ext = path.resolve(config.logo).split('.')[1]
        ctx.type = type[ext]
        ctx.body = fs.createReadStream(path.resolve(config.logo))
        await next()
    }
}

module.exports = Common