//     // modules
// // const vivek = "vivek"
// // const  abhi = "abhi"
// // const sayHi = (name)=>{
// //     console.log(`hellow there ${name}`);
// // }

//     // accessing the variables
// const names = require('./4_names');
// const sayHi = require('./5_utils')
// console.log(names)


// const data = require('./6_alternative_flavours.js')
// console.log("the app data starts here")
// console.log(data)

// console.log("the log data ends here")

// // sayHi('vivek')
// // sayHi(names.vivek)
// // sayHi(names.abhi)

// require('./7_mind_grenade.js')



// // working with the os module------------

// const os = require('os')

// //info about current user
// const user = os.userInfo()
// console.log(`the user info are as follow `)
// console.log(user)


// //method to return the system up time
// console.log(`the system up time ${os.uptime} seconds`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOS)


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
 

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end('welcome to our homepage, Vivek');
//     } else if (req.url == '/a') {
//         res.end('welcome, here is the about section');
//     } else {
//         res.end('<h1>OOOPSS...!</h1> <p>We cannot process the request</p> <a href="/">back home</a>);
//     }
// });

// server.listen(8888, () => {
//     console.log('Server is listening on port 8888');
// });






