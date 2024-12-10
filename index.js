require('dotenv').config()
const express = require('express')
const app = express()
//const port = 2000
const githubData = {
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest",
    "status": "404"
}

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

app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
