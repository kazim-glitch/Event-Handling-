const EventEmitter = require('events');

const  emitter = new EventEmitter()

emitter.on('message',(arg)=>{
    console.log('Listening ..',arg)
})

emitter.emit('message',{id:1,url:'http://'});


