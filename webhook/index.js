const http = require('node:http')
const url = require('node:url')
const { StringDecoder } = require('node:string_decoder')

const formatData = data => {
    let payload
    try {
        payload = JSON.parse(data)
    } catch (e) {
        payload = {}
    }
    return payload
}

const notFound = (request, response) => {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Endpoint não encontrado' }))
}

const webHook = (request, response) => {
    const decoder = new StringDecoder('utf-8')
    let buffer = ''

    request.on('data', (data) => {
        buffer += decoder.write(data)
    })

    request.on('end', () => {
        buffer += decoder.end()

        const data = formatData(buffer)

        console.log('Recebido webhook com os dados:', data)

        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ message: 'Webhook recebido com sucesso' }))
    })
}

const server = http.createServer((request, response) => {
    const method = request.method.toLowerCase()
    const parsedUrl = url.parse(request.url, true)

    if (method === 'post') {
        if (parsedUrl.pathname === '/webhook') return webHook(request, response)
    }

    notFound(request, response)
})

const PORT = 3000
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
