const vm = require('vm')

const sandbox = {
  x: 10,
  console
}

const w = 8

const code = `
console.log('Este é um contexto isolado')
console.log('o contexto aceita o objeto console')
console.log(\`o contexto também sabe que x = \${x}\`)
console.log('mas o contexto não sabe o valor de w')
'este é o retorno'
`

const result = vm.runInNewContext(code, sandbox)
console.log(result) // este é o retorno
console.log(result) // este é o retorno
console.log(result) // este é o retorno
console.log(result) // este é o retorno