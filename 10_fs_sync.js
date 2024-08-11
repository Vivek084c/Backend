// file reading --------------------------------------------------------------
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second)

writeFileSync('./content/result_sync.txt',
    `Here is the result: ${first} , ${second}`,
    {flag: 'a'}
    )

console.log('done with this task');
console.log('starting the next tast');



const {readFile} = require('fs')

console.log('started a first task')
// check the file path
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('compiled the fist task')
})

console.log('started the second task')



// started operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')
//completed and excited operating system


setInterval(() => {
    console.log('hellow world')
}, 2000);
console.log('i will run first')
// process stays alive until kill the process with ctrl + c, unexpected error

const http = require('http')

const server = http.createServer((req, res)=> {
    console.log('request event')
    res.end('hellow world')
})

server.listen(8888, ()=>{
    console.log('server is listening to the port')
})


