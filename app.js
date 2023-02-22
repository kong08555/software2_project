const express = require('express')
const app = express()

app.get("/showdata",(req,res)=>{
    res.sendFile(__dirname+'/block2.html')

})

app.listen(3000,()=>{
    console.log("server connect start")
})