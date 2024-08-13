const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    // console.log(`user has hit the server`)

    const url = req.url

    // home page
    if (url == '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>welcome to home page</h1>')
        res.end()
    } // about page
    else if (url == '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>welcome to about page</h1>')
        res.end()
    }// 404
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Error..!</h1>')
        res.end()
        
    }
       

  
})

server.listen(8888)