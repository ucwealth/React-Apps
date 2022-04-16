const fs = require('fs')
// const readStream = fs.createReadStream('./docs/blog.txt', { encodind: 'utf8'})
const readStream = fs.createReadStream('./docs/blog.txt')
const writeStream = fs.createWriteStream('./docs/bloga.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----')
//     console.log(chunk)
//     writeStream.write('\n --- New CHUNK RECEIVED --- \n')
//     writeStream.write(chunk)
// })

// piping 
readStream.pipe(writeStream)