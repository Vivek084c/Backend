const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");
const app = express.Router();

// route to register the user
app.post("/register", registerUser)

// route to login the usre
app.post("/login", loginUser)

// route to get the current usre loged in 
app.get("/current", getUser)

module.exports = app