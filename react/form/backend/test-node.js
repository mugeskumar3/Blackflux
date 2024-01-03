console.log("Hey Hi!")

const make = require('./testing')

console.log(make.add(5,6))
console.log(make.sub(5,6))
console.log(make.mul(5,6))
console.log(make.div(50,5))

console.log("Making")
const  {add,sub, mul, div} = require('./testing')

console.log(add(3,3))
console.log(sub(3,3))
console.log(mul(3,3))
console.log(div(3,3))   
console.log({add,sub, mul, div})
const os = require('os')
console.log(os.type())
console.log(os.homedir())
console.log(os.hostname()) 