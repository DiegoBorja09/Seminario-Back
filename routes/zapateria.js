const express = require("express")
const zapservices= require("../services/zapateria")


function zapateria(app){

    const router = express.Router()
    const zapserv= new zapservices()

    app.use("/api/zapateria",router)

    router.get("/",async(req,res)=>{

        const zapt = await zapserv.getAll()

        return res.json(zapt)
    })
    router.put("/update:id",async(req,res)=>{

        const zapt = await zapserv.update(req.params.id,req.body)

        return res.json(zapt)
    })
    router.delete("/delete:id",async(req,res)=>{

        const zapt = await zapserv.delete(req.params.id)

        return res.json(zapt)
    })

    router.post("/create",async(req,res)=>{

        const zapt = await zapserv.create(req.body)

        return res.json(zapt)
    })


}
module.exports=zapateria

