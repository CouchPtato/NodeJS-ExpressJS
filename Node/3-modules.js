// Modules - encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const alt = require('./6-alt_export')

console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(alt)

// without assigning variable the code still works as we already invoked the function in its module.
require('./7-invoked_func')