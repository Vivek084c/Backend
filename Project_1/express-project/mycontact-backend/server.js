const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT  || 8877;

app.use('/api/contact', require('./routes/contactRoutes'))

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})