const zapateriaModel=require("../models/Zapateria")


class zapateria{

   async getAll(){

        try {
            const zapatos= await zapateriaModel.find()

            return zapatos

        } catch (error) {
            
            return error

        }
        

    }

    async create(data){

        try {
            const zapatos= await zapateriaModel.create(data)

            return zapatos
            
        } catch (error) {
            
            return error

        }


    }

    async update(id,data){
        try {
            const zapatos= await zapateriaModel.findByIdAndUpdate(id,data,{new:true})

            return zapatos
            
        } catch (error) {
            
            return error

        }
    }

    async delete(id){
        try {
            const zapatos= await zapateriaModel.findByIdAndDelete(id)

            return zapatos
            
        } catch (error) {
            
            return error

        }
    }


}

module.exports=zapateria