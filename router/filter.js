const {Router}=require("express")
const router=Router()
const books=require("../model/book")

// router.get("/filter",(req,res)=>{
//     books.find({}).then(data=>{
//        res.render("filter",{
//            title:"Filter",
//            indexActive:true,
//            data
//        })
//     }).catch(err=>{ 
//        console.log(err);
//     })
//    })

   router.get("/filter",(req,res)=>{
   books.find({})
   .sort({
      nomi:1,
   })
   
   .then(data=>{
      res.render("filter")
   }).catch(err=>{ 
      console.log(err);
   })
  })

   module.exports=router