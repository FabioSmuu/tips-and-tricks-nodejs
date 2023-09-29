process.on('message', msg => {
    console.log(`[MAIN to FORK]: ${msg}`)
    process.send('Pong!')
})