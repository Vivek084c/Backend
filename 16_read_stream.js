const {createReadStream} = require('fs');
const { start } = require('repl');

const stream = createReadStream('./content/big_.txt', {highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result)=>{
console.log(result)
})

stream.on('error', (err)=>console.log(err))