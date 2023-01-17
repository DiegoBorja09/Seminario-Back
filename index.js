const express = require("express")
const { port } = require("./config")
const {connection} = require("./config/db")

connection()
const app = express()

app.get("/",(req,res)=>{
    return res.json({
        name:"Zapateria v1"
    })
})


app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})