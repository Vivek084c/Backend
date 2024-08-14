const express = require('express');
const app = express()

app.get('/', (req, res)=>{
console.log('user has requested the resorces')
res.status(200).send('Home page')
})


app.get('/about', (req, res)=>{
    res.status(200).send('welcome to about page')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1> resorces not found</h1>')
})

app.listen(8888, ()=>{
    console.log('server is runnign on port 8888')
})

//app.get
//app.post
//app.put
//app.delete
//app.use
//app.listen

