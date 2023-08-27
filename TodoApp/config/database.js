const mongoose  = require('mongoose');

require('dotenv').config();

//This is the part where we connect with the database mongodb database

const dbConnect = ()=>{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(()=>{
            console.log('Successfully connected to dataBase');
        })
        .catch ((error)=> {
            console.log('Error connecting to database');
            console.error(error.message);
            }
        )
}

module.exports = dbConnect;