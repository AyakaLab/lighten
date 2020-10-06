const Login = {
    async postLogin(ctx, next) {
        console.log(ctx.request.body)
        await next()
    }
}

module.exports = Login