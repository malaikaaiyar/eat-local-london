// express
const express = require('express')
const app = express()

const path = require('path')
const bodyParser = require('body-parser')

// views
app.set('view engine', 'ejs')
app.set('views', 'views')

const port = process.env.PORT || 3000

// routes
const mainRoutes = require('./routes/main')
app.use(mainRoutes)

// public folder
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log('app started')
})