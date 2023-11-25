const {Router}=require("express")
const router=Router()
const books =require("../model/book")
router.get("/",(req,res)=>{
 books.find({}).then(data=>{
    res.render("index",{
        title:"Bosh sahifa",
        indexActive:true,
        data
    })
 }).catch(err=>{ 
    console.log(err);
 })
})

router.post("/",(req,res)=>{
   const a =req.body
   a.yozuvchi =parseInt(a.yozuvchi)
   console.log(a);
   books.aggregate([
      {$sort:a}
   ]).then(data=>{
      res.render("index",{
          title:"Bosh sahifa",
          indexActive:true,
          data
      })
   }).catch(err=>{ 
      console.log(err);
   })
  })
// router.get("/",(req,res)=>{
//    books.find({})
//    .sort({
      // alfavit boyicha tartiblaydi
      // nomi:1,
      // alvafitni teskari tartibda joyylashuvi
      // nomi:-1,
      // yozuvchi boyicha filter qilsih
      // yozuvchi:-1,
      // sonngi vaqtda qoshilgan
   //    date:-1
   // })
   // sonngi 2ta qoshilgani
   // .limit(2)
   // boshidagi tanlangan 2 yoki 3ta malumotni korsatmaydi
   // .skip(2)
//    .then(data=>{

//       res.json(data)
//    }).catch(err=>{ 
//       console.log(err);
//    })
//   })
// router.get("/",(req,res)=>{
// books.aggregate([
//    // {$match:{yili:2018}}
//    // {$project:{nomi:1,yozuvchi:1}}
//    // {$group:{_id:'$yozuvchi',narxi:{$sum:1}}}
//    // {$sort:{yozuvchi:1}}

// ]).then(data=>{
//          res.json(data)
//       }).catch(err=>{ 
//          console.log(err);
//       })
//      })
// router.get("/",(req,res)=>{
//    books.find({
//       "comments.comment":{
//          $exists:true
//       }
//    }).then(data=>{
//             res.json(data)
//          }).catch(err=>{ 
//             console.log(err);
//          })
//         })
module.exports=router