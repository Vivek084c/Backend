const mongoose = require("mongoose");

const connectDb = async ()=>{
try{
    const connext = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connection Established to the database..! : ", connext.connection.host, connext.connection.name )
}
catch(err){
    console.log(err);
    process.exit(1);
}
}

module.exports = connectDb;
