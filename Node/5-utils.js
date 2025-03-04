//as all files are modules we can use exports to export this function

const sayHi = (name) =>
    console.log(`Hello there ${name}`);

module.exports = sayHi
    