const {Router}=require("express")
const router=Router()
const books =require("../model/book")
router.get('/search', (req, res) => {
    res.render('search', { title: 'Search Panel' });
});
router.post("/search",(req,res)=>{
    const searchResult = req.body.query
    console.log(searchResult);
    books.find({
        $or: [
            { nomi: { $regex: searchResult, $options: 'i' } },
            { yozuvchi: { $regex: searchResult, $options: 'i' } },
            { turi: { $regex: searchResult, $options: 'i' } },

        ]
    }).then(data=>{
        res.render("search",{
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })
})

module.exports=router