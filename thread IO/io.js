const fs = require('fs')
const { parentPort } = require('worker_threads')

parentPort.on('message', async msg => {
    if (msg.command === 'read') {
        const data = await fs.promises.readFile(msg.filename, 'utf8')
        parentPort.postMessage(data)
    }
})