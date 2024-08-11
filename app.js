const {readFile, writeFile} = require('fs')

const util = require('util');

const readFilePromisify = util.promisify(readFile)
const writeFilePromisify = util.promisify(writeFile)




const start = async() => {
    try {
        const first = await readFilePromisify('./content/first.txt', 'utf8');
        const second = await readFilePromisify('./content/second.txt', 'utf8');
        await writeFilePromisify('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`)
        console.log(first, second)
        
    } catch (error) {
        console.log(error)   
    }
}

start()

// const getText = (path)=>{
//     return new Promise((resolve, reject) => {
        
//         readFile(path,'utf8',(err, result)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(result)
//             }
//         })

//     })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err)=>console.log(err))
