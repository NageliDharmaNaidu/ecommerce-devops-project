const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("User Service Running")
})

app.get('/users',(req,res)=>{
    res.json([
        {id:1,name:"Dharma"},
        {id:2,name:"DevOps User"}
    ])
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`User Service running on port ${PORT}`)
})
