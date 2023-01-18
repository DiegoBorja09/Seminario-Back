const express = require("express")
const { port } = require("./config")
const {connection} = require("./config/db")

//Importar Routers

const routerzapt= require("./routes/zapateria")

connection()
const app = express()

app.use(express.json())

//utilizamos Routers

routerzapt(app)

app.get("/",(req,res)=>{
    return res.json({
        name:"Zapateria v1"
    })
})


app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})