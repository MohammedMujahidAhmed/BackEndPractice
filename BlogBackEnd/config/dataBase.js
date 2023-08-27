const mongoose = require('mongoose')

require('dotenv').config()

const connectMongoDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(console.log('Connected successfully to dataBase'))
    .catch((error) => {
        console.log('Problem connecting database');
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectMongoDb;