const path = require('path')
const { spawn } = require('child_process')

const systeminfo = spawn('systeminfo')

systeminfo.stdout.on('data', data => {
    console.log(`${data}`)
})

systeminfo.stderr.on('data', data => {
    console.error(`stderr: ${data}`)
})

systeminfo.on('close', code => {
    console.log(`O systeminfo foi finalizado com o código de saída ${code}`)
})