import HttpProxy from 'http-proxy'
import http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

const proxy = HttpProxy.createProxyServer({ changeOrigin: true })

const STATIC = 'http://localhost:8080'
const API_URL = 'http://localhost:3000'

function route(req: IncomingMessage, res: ServerResponse) {
    if (/(\.(html|js|txt|png|jpg|css|ico)$)|(^\/?$)/.test(req.url)) {
        proxy.web(req, res, { target: STATIC })
        return
    }
    proxy.web(req, res, { target: API_URL })
}

http.createServer(route).listen(5000, () => console.log('Proxying on 5000'))
