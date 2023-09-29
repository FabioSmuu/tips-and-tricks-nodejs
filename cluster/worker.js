const cluster = require('node:cluster')
const http = require('node:http')

const exampleUsage = () => {
    const server = http.createServer((req, res) => {
        process.send(`Ping!`)
        res.writeHead(200)
        res.end(`[FORK] PID ${process.pid}`)
        // process.kill(0)
    })

    server.listen(3000, '0.0.0.0', () => {
        const { address, port } = server.address()
        console.log(`[FORK] ${process.pid} ${address}:${port}`)
    })
}

if (cluster.isWorker) {
    exampleUsage()

    process.on('message', message => {
        console.log(`[FORK] PID ${process.pid} Recebeu: "${message}"`)
    })

    // process.send(`Comentado para exemplo!`)
}