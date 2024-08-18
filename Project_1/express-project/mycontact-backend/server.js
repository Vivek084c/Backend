const express = require('express');
const errorHandler = require('./middelware/errorHandle');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

// connecting to the databse: 
connectDb();

// creating an app
const app = express();

//accessing the connection port from the .env file
const port = process.env.PORT  || 8877;

//midelware to get the body from request body
app.use(express.json())
app.use('/api/contact', require('./routes/contactRoutes'))

//endpoint to register the user
app.use('/api/users', require('./routes/userRoutes'))

// middelware to handle the error 
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})