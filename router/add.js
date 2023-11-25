const {Router}=require("express")
const router=Router()
const books =require("../model/book")

router.get("/add",(req,res)=>{
    books.find({}).then(data=>{
        res.render("add",{
            title:"Kitob qo'shish",
            addActive:true,
            data:data,
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/add",(req,res)=>{
    const{nomi , yozuvchi , yili , sahifasi , oqishlar_soni,turi , narxi, file,book}=req.body
    const db = new books({
     
        nomi,
        yozuvchi,
        yili,
        sahifasi,
        oqishlar_soni,
        turi,
        narxi,
        file,
        book

    })
    db.save().then(data=>{
        res.render("add",{
            success:true,
            data
        })
        
        }).catch(err=>{
            console.log(err);
    })
})
module.exports=router