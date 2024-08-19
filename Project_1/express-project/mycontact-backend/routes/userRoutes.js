const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");
const { route } = require("./contactRoutes");
const validaToken = require("../middelware/validateTokenHandler");
const app = express.Router();

// route to register the user
app.post("/register", registerUser)

// route to login the usre
app.post("/login", loginUser)

// route to get the current usre loged in 
app.get("/current", getUser)

// route to handle the user authentaication and error handling 
app.get("/current", validaToken, curent)

module.exports = app