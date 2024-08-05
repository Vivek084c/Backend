    // modules
// const vivek = "vivek"
// const  abhi = "abhi"
// const sayHi = (name)=>{
//     console.log(`hellow there ${name}`);
// }

    // accessing the variables
const names = require('./4_names');
const sayHi = require('./5_utils')
console.log(names)


const data = require('./6_alternative_flavours.js')
console.log("the app data starts here")
console.log(data)

console.log("the log data ends here")

// sayHi('vivek')
// sayHi(names.vivek)
// sayHi(names.abhi)

require('./7_mind_grenade.js')