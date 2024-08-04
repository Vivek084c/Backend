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



sayHi('vivek')
sayHi(names.vivek)
sayHi(names.abhi)