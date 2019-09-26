const http = require('http')
const Koa = require('koa')
const send = require('koa-send')

function serve(ctx) {
    let { path } = ctx
    if (path === '/') {
        path = '/index.html'
    }
    return send(ctx, path, { root: __dirname + '/dist' })
}

const app = new Koa
app.use(serve)

http.createServer(app.callback()).listen(3000)
