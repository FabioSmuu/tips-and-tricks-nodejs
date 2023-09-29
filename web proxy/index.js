const http = require('http')
const { PassThrough } = require('stream')
const runBrowser = require('./browser.js')

const server = http.createServer((req, res) => {
    const options = {
        host: req.headers.host,
        port: req.headers.port,
        path: req.url,
        method: req.method,
        headers: req.headers
    }

    const proxyReq = http.request(options, proxyRes => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers)

        const passThroughStream = new PassThrough()
        proxyRes.pipe(passThroughStream).pipe(res)

        passThroughStream.on('data', chunk => {
            console.log(chunk.toString())
        })
    })

    req.pipe(proxyReq)
})

const proxy = {
    ip: 'localhost',
    port: 8080
}

server.listen(proxy.port, proxy.ip, () => {
    const { ip, port } = proxy
    console.log(`Proxy: http://${ip}:${port}`)
    runBrowser(ip, port)
})

