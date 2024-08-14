const http = require('http')

const {readFileSync} = require('fs');

// get all the files
const hopePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    // console.log(`user has hit the server`)

    const url = req.url
    console.log(url)

    // home page
    if (url == '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(hopePage)
        res.end()
    } // styles
    else if (url == '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }// image file
    else if (url == '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }// logic
    else if (url == '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }// 404
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Error..!</h1>')
        res.end()
        
    }
       

  
})

server.listen(8888)