const { fork } = require('node:child_process')
const child = fork('./child.js')

child.on('message', msg => {
    console.log(`[FORK to MAIN]: ${msg}`)
})

child.send('Ping!')
