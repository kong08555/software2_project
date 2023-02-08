const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('country road united home')
})

app.listen(3000, () => {
    console.log("start server at port [3000]")
})