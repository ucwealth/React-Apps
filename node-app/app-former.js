const express = require('express')
const app = express()

// Register view engine 
app.set('view engine', 'ejs')
// app.set('views', 'templateEngineViews') // Use this when your ejs files are in a different folder from views 

app.listen(3000)
app.get('/', (req, res) => {
    // res.send('<h1>Home Page</h1>')
    res.sendFile('./views/index.html', { root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})