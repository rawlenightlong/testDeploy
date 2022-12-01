const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4321
const dataurl = process.env.dataurl

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/dburl', (req, res) => {
    res.send(`My connection string is: ${dataurl}`)
})

app.listen(PORT, () => {
    console.log(`Hey there, Delilah, what's it like in Port ${PORT}`)
})