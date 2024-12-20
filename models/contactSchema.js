const mongoose=require("mongoose")
const contactSchema=mongoose.Schema(
{
    Name:String,
    Email:String,
    PassWord:String,
    PhoneNumber:Number,
})
const User=mongoose.model("user",contactSchema)
module.exports=User