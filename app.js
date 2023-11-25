const express =require("express")
const app = express()
const bodyParser = require("body-parser")
// const exphbs =require("express-handlebars")
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mswebdev175:uGJflWRC0CDhtbUE@newcluster.gmurumo.mongodb.net/books")
.then(()=>{
    console.log("Mongoose is runnning");
}).catch((error)=>{
    console.log(error);
})
const PORT = process.env.PORT||3000
const path = require("path")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// const hbs = exphbs.create({
//     extname:"hbs",
//     defaultLayout:"main"
// })
// app.engine("hbs",hbs.engine)
// app.set("view engine","hbs")
// app.set("views","views")
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"))
// 1-way



// // Router
app.use(require("./router/index"))
app.use(require("./router/add"))
app.use(require("./router/singlePage"))
app.use(require("./router/deleted"))
app.use(require("./router/filter"))
app.use(require("./router/navbar"))
app.listen(PORT,()=>{
    console.log("Server is running");
})
