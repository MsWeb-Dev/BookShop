const {Router}=require("express")
const router=Router()
const archives =require("../model/arxive")
const books=require("../model/book")
router.get("/deleted",(req,res)=>{
 archives.find({}).then(data=>{
    res.render("deleted",{
        title:"Deleted",
        indexActive:true,
        data:data
    })
 }).catch(err=>{ 
    console.log(err);
 })
})

router.get("/archives/:id",(req,res)=>{
    const id =req.params.id
     archives.findByIdAndDelete(id).then(data=>{
         const {file,book,nomi,yozuvchi,yili,sahifasi,oqishlar_soni,turi,narxi}=data
         const db = new books({
             file,
             book,
             nomi,
             yozuvchi,
             yili,
             sahifasi,
             oqishlar_soni,
             turi,
             narxi
         })
         db.save().then(data=>{
             res.render("index")
         }).catch(err=>{
             console.log(err);
         })
     }).catch(err=>{
         console.log(err);
     })
     
})



module.exports=router