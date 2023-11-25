const mongoose=require("mongoose")
const schema= mongoose.Schema
const arxive=new schema({
    file: String,
    book:String,
    nomi:String,
    yozuvchi:String,
    yili:Number,
    sahifasi:Number,
    oqishlar_soni:Number,
    turi:String,
    narxi:Number
})

module.exports=mongoose.model("archives",arxive)