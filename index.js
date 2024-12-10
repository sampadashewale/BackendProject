require('dotenv').config()
const express = require('express')
const app = express()
//const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('this is my twitter account Sampada Shewale')
})

app.get('/login', (req, res) => {
    res.send('<h1><center>Login page Here</center></h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1><center>youtube page Here</center></h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
