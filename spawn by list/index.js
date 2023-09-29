const { spawn } = require('node:child_process')

// const env = process.env
const env = { NODE_ENV: '[ENV] example' }

const childList = [
    'example.js',
    'example.js',
    'example.js',
    'example.js'
]

for (const file of childList) {
    const child = spawn('node', [file], { env })
    child.stdout.on('data', data => {
        console.log(child.pid, data.toString())
    })
}