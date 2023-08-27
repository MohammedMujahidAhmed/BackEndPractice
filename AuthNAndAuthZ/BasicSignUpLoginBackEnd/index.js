const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

const dbConnect = require('./config/database');
dbConnect();

const user = require('./routes/user');

app.use('/api/v1',user); 


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})