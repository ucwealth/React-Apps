const http = require('http')
const fs = require('fs')
const port = 3000
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type

    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Wow, Now i understand http requests and responses')
    // res.end()

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h2>Am i working?</h2>')
    // res.end()

    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            break
        case '/about':
            path += 'about.html'
            break
        default:
            path += '404.html'
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