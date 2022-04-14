const fs = require('fs')

// Reading Files

// fs.readFile('./read.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// Writing to files

// const content = "This is my best novel yet unwritten for sometime"
// fs.writeFile('./writer.txt', content, (err, data) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file written successfully')
// })

// Deleting files

// fs.unlink('./write.txt', (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file deleted successfully')
// })

// Creating directories

// if(!fs.existsSync('./docs')) {
//     fs.mkdir('./docs', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./docs', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

