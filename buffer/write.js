const fs = require('fs')
const buffer = Buffer.alloc(24)

// Escrevendo um valor inteiro de 8 bits na posição 0 do buffer (-128 a 127)
buffer.writeInt8(42, 0)

// Escrevendo um valor inteiro de 16 bits em formato little-endian na posição 1 do buffer (-32,768 a 32,767)
buffer.writeInt16LE(1234, 1)

// Escrevendo um valor inteiro de 16 bits em formato big-endian na posição 3 do buffer (-32,768 a 32,767)
buffer.writeInt16BE(5678, 3)

// Escrevendo um valor inteiro de 32 bits em formato little-endian na posição 5 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.writeInt32LE(98765432, 5)

// Escrevendo um valor inteiro de 32 bits em formato big-endian na posição 9 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.writeInt32BE(12345678, 9)

// Escrevendo um valor de ponto flutuante de 32 bits em formato little-endian na posição 13 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.writeFloatLE(3.1415, 13)

// Escrevendo um valor de ponto flutuante de 32 bits em formato big-endian na posição 17 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.writeFloatBE(2.71828, 17)

// Escrevendo um valor de ponto flutuante de 64 bits em formato little-endian na posição 21 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.writeDoubleLE(3.14159265359, 21)

// Escrevendo um valor de ponto flutuante de 64 bits em formato big-endian na posição 29 do buffer (-1.7976931348623157e308 a 1.7976931348623157e308)
buffer.writeDoubleBE(2.71828182846, 29)

fs.writeFileSync('dados.bin', buffer)
