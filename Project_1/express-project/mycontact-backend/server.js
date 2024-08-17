const express = require('express');
const errorHandler = require('./middelware/errorHandle');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT  || 8877;
//midelware to get the body from request body
app.use(express.json())
app.use('/api/contact', require('./routes/contactRoutes'))
// middelware to handle the error 
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})