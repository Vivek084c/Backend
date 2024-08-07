const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('welcome to our homepage, vivek')
    }
    if(req.url == '/a'){
        res.end('welcome, here is the about section')
    } 
    res.end(
        '<h1>OOOPSS...!</h1> <p> we can process the request</p> <a heref="/>back home</a>'
    )
    
})

server.listen(8888)