const mongoose = require("mongoose");

// creating a contact shcema
const contactSchema = mongoose.Schema({
    name : {
        type : String,
        require : [true, "Please add the contact name "],
    },

    email : {
        type : String,
        require : [true, "Please enter the email address..! "]
    }, 

    phone : {
        type : String,
        require : [true, "Please enter the phone number"]
    }
}, {
    timestamps : true,
});

//exporting the above schema as a module
module.exports = mongoose.model("Contact", contactSchema);