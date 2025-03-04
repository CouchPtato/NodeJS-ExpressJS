//Built-in modules: os, path, fs, http
const os = require('os')

// info about user 
const user = os.userInfo()
console.log(user);

// returns system uptime
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(), 
}

console.log(currentOS)