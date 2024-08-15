const exprees = require('express')
const app = exprees()

let {people}  =require('./express_tutorials/data.js')

app.get('/api/people', (req, res)=>{
    res.status(200).json({success : true, data : people})
})

app.listen(8888, ()=> {
    console.log('the severe is listening at port 8888...')
})