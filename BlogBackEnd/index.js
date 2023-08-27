const express  = require('express');

const app = express();

require('dotenv').config()
app.use(express.json());
const blog = require('./routes/blog');
app.use('/api/v1',blog);

const connectMongoDb = require('./config/dataBase')
connectMongoDb();

const PORT = process.env.PORT  || 3000;

app.listen(PORT,()=>{
    console.log('app is running successfully');
})

app.get('/',(req,res)=>{
    res.send(`<h1>This is home page</h1>`);
})