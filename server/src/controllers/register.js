const Register = {
    async postCode (ctx, next) {
        console.log(ctx.request.body)
        await next()
    }
}

module.exports = Register