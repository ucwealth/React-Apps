// Global object is the node version of the window onbject in your browser
// console.log(global)

setTimeout(() => {
    clearInterval(timing)
    console.log('inside timeout')

}, 3000)

const timing = setInterval(() => {
    console.log('in the interval')
}, 1000)

console.log(__dirname)
console.log(__filename)