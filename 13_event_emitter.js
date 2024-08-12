const EventEmitter = require('events');

const custormEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event


// we also define the call back function when the below defined event takes palace
custormEmitter.on('response', (name, id)=>{
console.log(`data recieved`)
console.log(`the name of the person is ${name} and the id is ${id}`)
})
custormEmitter.on('response', (name, id, age)=>{
    console.log(`some other logic here`)
    console.log(`the name of the person is ${name} and the id is ${id} and his age is ${age}`)
})

custormEmitter.emit('response','vivek',32,20)