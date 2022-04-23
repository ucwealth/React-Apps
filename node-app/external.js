const http = require('http')
const fs = require('fs')
const writeStream = fs.createWriteStream('./docs/fromGoogle.txt')

// GET Request
const request = http.get('http://www.google.com', (response) => {
    console.log("Status Code: ", response.statusCode)
    console.log("Headers: ", response.headers)
    // response.on('data', (chunk) => console.log(`Chunk received: ${chunk}`))
    response.on('data', (chunk) => writeStream.write(`Chunk received:\n ${chunk} \n \n`) )
})
request.on('error', (err) => console.log(err))

// POST request 

const serializedData = JSON.stringify({
    name: "Immaculata",
    age: 23,
    country: "Liberia"
})
const options = {
    hostname: '', // this is the external server url
    port: '',
    method: 'POST', // it could also be PUT or DELETE
    path: '',
    headers: {
        'Content-Type': 'application/json'
    }
}
const postRequest = http.request(options, (response) => {
    console.log("Status Code: ", response.statusCode)
    console.log("Headers: ", response.headers)
    response.on('data', (chunk) => console.log(`Chunk received: ${chunk}`))
})
postRequest.on('error', (err) => console.log(err))
postRequest.end(serializedData)
