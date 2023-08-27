const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('Server Started at port number 3000');
})

app.get('/',(request , responce)=>{
    responce.send("whats app all");
})

app.post('/api/cars',(request , responce)=>{
    const {name,brand} = request.body;
    console.log(name)
    console.log(brand)
    responce.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection successfull")})
.catch((error)=>{console.log("Recived an error",error)});
