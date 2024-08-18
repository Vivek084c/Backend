const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
    type: String,
    require : [true, "please enter the user name"],
    },

    email : {
        type : String, 
        require : [true, "Please add the user address"],
        unique : [true, "Email address already taken"],
    },

    password : {
        type : String,
        require : [true, "Please use the user password"],
    }
},
    {
        timestamps : true,
    }

);

module.exports = mongoose.model("User", userSchema);
