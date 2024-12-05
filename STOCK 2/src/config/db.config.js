require("dotenv").config();
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:process.env.MONGO_DB_NAME
}).then(()=>{
    console.log("Mongo db connnected successfully...")
})
.catch((err)=>{
console.log("Error while connecting Mongodb")
console.error('Error connecting to MongoDB:', err.message);
process.exit(1)
})