const cluster = require('node:cluster')
const os = require('node:os')

if (cluster.isMaster) {
	console.log(`[MAIN] PID ${process.pid}`)

	const numCPUs = os.cpus().length
	for (let i = 0; i < numCPUs; i++) {
		const worker = cluster.fork()
		console.log(`[MAIN] PID ${worker.process.pid} criado`)

		worker.on('message', message => {
			console.log(`[MAIN] Recebeu de ${worker.process.pid}: "${message}"`)
			worker.send(`Pong!`)
		})

		cluster.on('exit', (worker, code, signal) => {
	        console.log(`[MAIN] Exit PID ${worker.process.pid}: [${code}] ${signal}`)
	        cluster.fork()
	    })

		// worker.send(`Comentado para exemplo!`)
	}
} else {
	require('./worker')
}