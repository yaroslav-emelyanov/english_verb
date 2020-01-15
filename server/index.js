const express = require('express')
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

app.use('/api', verbsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})