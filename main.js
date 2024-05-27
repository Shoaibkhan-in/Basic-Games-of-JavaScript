const express = require('express')
const app = express()
const port = 3000



app.get('/Games/TicTacToe', (req, res) => {
    res.sendFile('TicTacToe/index.html', {root:__dirname})
    console.log("this is index ")
})
app.get('/Games', (req, res) => {
    res.sendFile('/index.html', {root:__dirname})
    console.log("this is index ")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})