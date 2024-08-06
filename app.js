//     // modules
// // const vivek = "vivek"
// // const  abhi = "abhi"
// // const sayHi = (name)=>{
// //     console.log(`hellow there ${name}`);
// // }

//     // accessing the variables
// const names = require('./4_names');
// const sayHi = require('./5_utils')
// console.log(names)


// const data = require('./6_alternative_flavours.js')
// console.log("the app data starts here")
// console.log(data)

// console.log("the log data ends here")

// // sayHi('vivek')
// // sayHi(names.vivek)
// // sayHi(names.abhi)

// require('./7_mind_grenade.js')



// // working with the os module------------

// const os = require('os')

// //info about current user
// const user = os.userInfo()
// console.log(`the user info are as follow `)
// console.log(user)


// //method to return the system up time
// console.log(`the system up time ${os.uptime} seconds`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOS)

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);

})





