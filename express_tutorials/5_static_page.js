const express = require('express');
const app = express();
const path = require('path');

//setup static and midleware
app.use(express.static('./express_tutorials/public'))

// app.get('/',(req, res)=>{
// res.sendFile(path.resolve(__dirname,'./express_tutorials/navbar-app/index.html'))
// adding to static assets
// SSR
// })

app.all('*', (req, res)=>{
    res.status(404).send("resorces not found")
})


app.listen(8888, ()=>{
    console.log(`server is listening at port 8888...`)
})

