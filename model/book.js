const mongoose=require("mongoose")
const schema= mongoose.Schema
const books=new schema({
    file:String,
    book:String,
    nomi:String,
    yozuvchi:String,
    yili:Number,
    sahifasi:Number,
    oqishlar_soni:Number,
    turi:String,
    narxi:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("books",books)