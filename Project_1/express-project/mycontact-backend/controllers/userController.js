const asyncHandler = require("express-async-handler")
const User = require("../models/userModels");
const userModels = require("../models/userModels");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req, res)=>{
    // getting the uesrname, email, password from the body 
    console.log("dsafs")
    const {username, email, password} = req.body;
    // checking if username or email or password is empty
    if (!username || !email || !password){
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

    // creating a new user
    // 1) creating a hash password
    const hashedPassword  = await bcrypt.hash(password, 10);
    // 2) creating a new user with the hashed password
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    });

    console.log(`User created succeddfully ${user}`)

    // sending the user data if the user is successfully created, not sending the passwrod
    if (user){
        res.status(201).json({_id : user._id, email : user.email})
    }
    else{
        res.status(400);
        throw new Error("User data was not valid")
    }
    res.json({message : "Registered the user"});
    
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req, res)=>{
    // fetching the email address and password 
    const {email, password} = req.body;
    
    
    // checking if we dont have email or passworfd
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandotory..!")
    }
    // checking if we have the user in databse
    const user = await User.findOne({email});
    console.log(email)


    //comparing hashed password and database password
    if (user && await bcrypt.compare(password, user.password)){
        // if the password is same, we provide the access token
        // 1) creating the access token, we use the user object as the payload for the paramter of the jwt.sign(), 
        // we also provide the access token secrete, and also the expiration time
        const accessToken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : "1m"}
    );
        res.status(200).json({accessToken});    
    }
    else{
        res.status(401)
        throw new Error("Email or password not validated..!")
    }
    res.json({message : "login user"});
});

//@desc get a user
//@route GET /api/users/current
//@access public
const getUser = asyncHandler (async (req, res)=>{
    res.json({message : "Current user information"});
});

module.exports = {registerUser, loginUser, getUser};