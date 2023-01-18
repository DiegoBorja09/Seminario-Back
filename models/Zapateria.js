const mongoose= require("mongoose")

const Zapateriaschema = new mongoose.Schema({

    marca:{
        type:String,
        required:[true,"marca is required"],

    },

    talla:{
        type:Number,
        required:[true,"talla is required"],

    },
    color:{
        type:String,
        required:[true,"color is required"],

    },
    genero:{
        type:String,
        required:[true,"genero is required"],

    },
    descripción:{
        type:String,
        required:[true,"descripción is required"],

    },


})

const zapateriaModel =mongoose.model("zapateria",Zapateriaschema)

module.exports=zapateriaModel


