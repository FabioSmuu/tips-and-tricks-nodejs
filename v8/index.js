const v8 = require('node:v8')

console.log(v8.cachedDataVersionTag())
console.log(v8.getHeapStatistics())
console.log(v8.getHeapSpaceStatistics())
console.log(v8.getHeapCodeStatistics())