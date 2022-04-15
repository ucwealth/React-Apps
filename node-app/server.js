const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Wow, Now i understand http requests and responses')
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2>Am i working?</h2>')
    res.end()

})
server.listen(port, 'localhost', () => {
    console.log('listening on port ' + port)
})