
const path = require('path');

console.log(path.sep)

// to create a new path
const filePath = path.join('/content/','subfolder','test.txt')
console.log(`the custom file path is `)
console.log(filePath)

// to get the basefile 
console.log(`the base path name is`)
const base = path.basename(filePath)
console.log(base)

// to get the absolute filepath
const absolute = path.resolve(__dirname, `content`,`subfolder`,`test.txt`);
console.log(absolute);