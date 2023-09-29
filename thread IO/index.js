const { Worker } = require('worker_threads')
const fs = require('fs')
const worker = new Worker('./io.js')

worker.on('message', data => {
    console.log(`Dados lidos do arquivo:\n${data}`)
})

worker.postMessage({
    command: 'read',
    filename: 'arquivo.txt'
})