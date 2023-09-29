const EventEmitter = require('node:events')
const myEmitter = new EventEmitter()

const sendData = data => {
    myEmitter.emit('example', data)
}

module.exports = { sendData, myEmitter }
