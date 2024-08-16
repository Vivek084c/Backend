const exprees = require('express')
const app = exprees()

let {people}  =require('./express_tutorials/data.js')

// static assets
app.use(exprees.static('./express_tutorials/methods_public'))

// getting access to form data - parse from data
app.use(exprees.urlencoded({extended : false}))

//parse json data
app.use(exprees.json())
app.get('/api/people', (req, res)=>{
    res.status(200).json({success : true, data : people})
})

app.post('/api/people', (req, res)=>{
    res.status(201).send('Success')
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    console.log(req.body)
    res.status(401).send('please provide credatials')
})

app.listen(8888, ()=> {
    console.log('the severe is listening at port 8888...')
})