const asyncHandler= require("express-async-handler");
const jst = require("jsonwebtoken");

const validaToken = asyncHandler(async((req, res, next)=>{
    let token ;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")){
        // getting the token from ther bearer 
        token = authHeader.split(" ")[1];

        // getting the verification done using jwt
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            // if error found we send the appropriate response
            if (err){
                res.status(401);
                throw new Error("User is not authorized ..!");
            }
            // getting the user information
            console.log(decoded);

        });
    } 
}))

module.exports = validaToken