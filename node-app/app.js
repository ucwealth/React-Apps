const express = require('express')
const app = express()

// Register view engine 
app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
   res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/create', (req, res) => {
    res.render('create')
})

// redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page

app.use((req, res) => {
    res.status(404).render('404')
})