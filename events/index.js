const { myEmitter, sendData } = require('./emitter')

myEmitter.on('example', data => {
    console.log('Evento recebido:', data)
})

sendData('mensagem de exemplo.')