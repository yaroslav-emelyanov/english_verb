const express = require('express')
const path = require('path')
const mysql = require('mysql')
const verbsRoutes = require('./routes/verbs')

global.db = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'english_verb'
})

const app = express()

app.locals.prefix = '/'

app.use(app.locals.prefix, express.static(path.join(__dirname, 'static')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next()
})

app.use(app.locals.prefix + 'api', verbsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})