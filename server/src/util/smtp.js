const fs = require('fs')
const path = require('path')
const Nodemailer = require('nodemailer')

const Log = require('../util/log')
const config = require('../../../config.json')

let template = fs.readFileSync(path.resolve(__dirname, './email/template.html')).toString()

let transport = Nodemailer.createTransport({
    host: config["public-email"].host,
    port: config["public-email"].port,
    auth: {
        user: config["public-email"].address,
        pass: config["public-email"].pass
    },
    tls: { rejectUnauthorized: false }
})

const Email = {
    mergeMail (code) {
        template = template.replace(/{{APPNAME}}/g, config["app-name"])
            .replace(/{{code}}/g, code)
            .replace(/{{IMAGEPATH}}/g, '"' + config.domain + '/api/common/logo' + '"')

        return template
    },

    sendCode (address, code) {
        return new Promise((resolve, reject) => {
            const html = this.mergeMail(code)
            const message = {
                from: config["public-email"].address,
                to: address,
                subject: config["app-name"] + ' Your Email Verify Code is ' + code,
                html: html
            }
            
            transport.sendMail(message, function(err, info) {
                if (err) {
                    Log.fatal(err)
                    reject(err)
                }
                Log.info(info)
                resolve(true)
            })
        })
    }
}

module.exports = Email