const {Router}=require("express")
const router=Router()
const books =require("../model/book")
const arxive = require("../model/arxive")
router.get("/books/:id",(req,res)=>{
    books.findById(req.params.id).then(data=>{
        res.render("singleBook",{
            data
        })
    }).catch(err=>{
        console.log(err);
    })
})

 
router.get("/book/edit/:id",(req,res)=>{
    books.findByIdAndUpdate(req.params.id).then(data=>{
        res.render("add",{
            data
        })
    }).catch(err=>{
        console.log(err);
    })
})
// edit id boyicha ozgartieish
router.post("/book/edit/:id",(req,res)=>{
    const newBook = {
        file:req.body.file,
        book:req.body.book,
        nomi:req.body.nomi,
        yozuvchi:req.body.yozuvchi,
        yili:req.body.yili,
        sahifasi:req.body.sahifasi,
        oqishlar_soni:req.body.oqishlar_soni,
        turi:req.body.turi,
        narxi:req.body.narxi
        
    }
    books.findByIdAndUpdate(req.params.id,newBook).then(data=>{
        res.redirect("/")
    }).catch(err=>{
        console.log(err);
    })
})
// router.get("/book/update/:id",(req,res)=>{
//     const id = req.params.id
//     books.updateOne({id:id}).then(data=>{
//         // res.render("add",{
//         //     data
//         // })
//         res.json(data)
//     }).catch(err=>{
//         console.log(err);
//     })
// })




router.get("/book/del/:id",(req,res)=>{
       const id =req.params.id
        books.findByIdAndDelete(id).then(data=>{
            const {file,book,nomi,yozuvchi,yili,sahifasi,oqishlar_soni,turi,narxi}=data
            const db = new arxive({
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
router.get("/book/del/:id",(req,res)=>{
    //     // author orqali malumot ochirish faqat 1ta malumotni
    const id =req.params.id
    books.findByIdAndDelete(id).then(data=>{
        res.render("add")
        // res.json(data)
        
    }).catch(err=>{
        console.log(err);
    })
    })

module.exports=router