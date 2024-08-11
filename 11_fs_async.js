
const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result_async.txt',`Here is the result: ${first} , ${second}`, {flag: 'a'}, (err, result)=>{
            if (err){
                console.log(err);
                return;
            } 
            console.log('done with this task')
        })
    }
)

})
console.log('starting the next task')


const http  = require('http');

const server = http.createServer((req, res)=>{
    
if(req.url == '/'){
    //its a home page
    res.end('welcome to home page')
    return;
}
if(req.url == '/about'){
    //its a home page
    res.end('welcome to about page')
    return;
}
else{
    res.end('error ocured')
    return;
}


})

server.listen(8888, ()=>{
    console.log('server is litening on port 8888')
})

