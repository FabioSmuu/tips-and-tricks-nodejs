const path = require('path')
const { spawn } = require('child_process')

module.exports = (proxyHost, proxyPort) => {
    const browserPE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
    const browser = spawn(browserPE, [`--proxy-server=http://${proxyHost}:${proxyPort}`, '--user-data-dir=./Profile'])

    browser.stdout.on('data', data => {
        console.log(`stdout: ${data}`)
    })

    browser.stderr.on('data', data => {
        console.error(`stderr: ${data}`)
    })

    browser.on('close', code => {
        console.log(`O Browser foi finalizado com o código de saída ${code}`)
    })
}