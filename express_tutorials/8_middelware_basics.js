const exprees = require('express')
const app = exprees()
const logger = require('./logger')
const authorize  = require('./authorize')

// req => middleware =>res

// defining a fucntiont to get some resorces
// const  logger = (req, res, next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     next()
// }

app.use([authorize, logger])

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about',  (req, res)=>{
    res.send('about')
})

app.get('/api/product',  (req, res)=>{
    res.send('product')
})

app.get('/api/item', (req, res)=>{
    console.log(req.user)
    res.send('item')
})

app.listen(8888, ()=> {
    console.log('the severe is listening at port 8888...')
})