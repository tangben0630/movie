const koa = require('koa')
const app = new koa()

app.use(async ctx => {
  ctx.body = "99999"
})

app.listen(7000)