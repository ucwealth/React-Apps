const fs = require('fs')
// fs.readFile('./read.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })
// const content = "This is my best novel yet unwritten for sometime"
// fs.writeFile('./writer.txt', content, (err, data) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file written successfully')
// })
fs.unlink('./write.txt', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('file deleted successfully')
})
