const fs = require('fs')
const buffer = fs.readFileSync('dados.bin')
// const buffer = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x40, 0x49, 0x0f, 0xdb, 0xac, 0x1c, 0x4b, 0x77, 0xbe, 0x9f, 0x1e, 0x7a])

// lê um valor inteiro de 8 bits a partir da posição 0 do buffer (-128 a 127)
buffer.readInt8(0)

// lê um valor inteiro de 16 bits em formato little-endian a partir da posição 2 do buffer (-32,768 a 32,767)
buffer.readInt16LE(1)

// lê um valor inteiro de 16 bits em formato big-endian a partir da posição 3 do buffer (-32,768 a 32,767)
buffer.readInt16BE(3)

// lê um valor inteiro de 32 bits em formato little-endian a partir da posição 5 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.readInt32LE(5)

// lê um valor inteiro de 32 bits em formato big-endian a partir da posição 9 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.readInt32BE(9)

// lê um valor de ponto flutuante de 32 bits em formato little-endian a partir da posição 13 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.readFloatLE(13)

// lê um valor de ponto flutuante de 32 bits em formato big-endian a partir da posição 17 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.readFloatBE(17)

// lê um valor de ponto flutuante de 64 bits em formato little-endian a partir da posição 21 do buffer (-2,147,483,648 a 2,147,483,647)
buffer.readDoubleLE(21)

// lê um valor de ponto flutuante de 64 bits em formato big-endian a partir da posição 29 do buffer (-1.7976931348623157e308 a 1.7976931348623157e308)
buffer.readDoubleBE(29)