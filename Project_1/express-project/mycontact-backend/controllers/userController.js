const asyncHandler = require("express-async-handler")
const User = require("../models/userModels");
const userModels = require("../models/userModels");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req, res)=>{
    // getting the uesrname, email, password from the body 
    const {usernmae, email, passowrd} = req.body;

    // checking if username or email or password is empty
    if (!usernmae || !email || !passowrd){
        // sending 404 and error
        res.status(400);
        throw new Error("All fields are mandotory..!");
    }

    // checking if we already have the email in the databse
    const userAvailable = await User.findOne({email});
    //checking if the user if available with the same email
    if (userAvailable){
        res.status(400);
        throw new Error("User already registerd!!")
    }

    res.json({message : "Registered the user"});
    
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req, res)=>{
    res.json({message : "login user"});
});

//@desc get a user
//@route GET /api/users/current
//@access public
const getUser = asyncHandler (async (req, res)=>{
    res.json({message : "Current user information"});
});

module.exports = {registerUser, loginUser, getUser};