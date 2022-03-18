const mongoose = require('mongoose');
require('dotenv').config()

const mongooseConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
    }).then((data)=>{
        console.log(`Mongodb connected with server:${data.connection.host}`);
    }).catch(err=>{
        console.log(`db err: ${err.message}`);
        process.exit(-1)
     }) ;
}

module.exports=mongooseConnect;