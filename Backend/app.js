const express=require("express");
const app=express();
const { register , login } = require("./controller/userController");
const path=require("path")
const bodyParser=require("body-parser")
const mongooseConnect=require('./config/database')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true}));
mongooseConnect();

app.post('/register',register);
app.post('/login',login);

app.get('/',function(req,res){
    res.send("Hello Teknath");
})

app.listen(4000,()=>{
    console.log(`Server started on port http://localhost:4000`);
})