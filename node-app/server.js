const http = require('http')
const fs = require('fs')
const port = 3000
const _ = require('lodash')

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20)
    console.log(num)

    // _.once() runs the function just once, no matter how many times you call it 
    const greet = _.once(() => { console.log("Hello there")})
    greet()
    greet()

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me': // Redirect from 'about-me' route to 'about' route   
            res.statusCode = 301 // resource has been permanently moved
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }
        // res.write(data)
        res.end(data)
    })

})
server.listen(port, 'localhost', () => {
    console.log('listening on port ' + port)
})