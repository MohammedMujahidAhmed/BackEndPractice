

//Creating the server...
const express = require('express');
const app = express();

//accessing the .env variables
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//Parsing the data for json formate
app.use(express.json());

const todoRoutes = require('./routes/todos');

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server started running at port ${PORT}`);
});


//connecting to db
const dbConnect = require("./config/database");
dbConnect();

app.get('/',(req,res)=>{
    res.send('<h1>This is HomePage Bro</h1>')
})  
