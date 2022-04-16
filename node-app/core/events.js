const EventEmitter = require('events')
class Emitter extends EventEmitter{}
const myEmitter = new Emitter()

myEmitter.on('eventname', () => {
    console.log('An event occured')
})
myEmitter.emit('eventname')
myEmitter.emit('eventname')

myEmitter.on('error', (err) => {
    console.error('This error occured ', err)
})
myEmitter.emit('error', new Error('Whoops!'))
