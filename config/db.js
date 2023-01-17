const mongoose=require("mongoose")
const { dbUsername, dbPassword, dbHost, dbName } = require(".")

mongoose.set("strictQuery", false);
const connection= async function(){
    const conn = await mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`)
    console.log("Mongo DB connected:",conn.connection.host) 
}

module.exports = {connection,mongoose}