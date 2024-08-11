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

