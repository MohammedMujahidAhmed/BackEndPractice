const express = require('express');

router = express.Router();

const {signUp , login} = require('../Controller/Auth');
const {auth, isStudent, isAdmin} = require('../Middleware/auth')


router.post('/signup',signUp);
router.post('/login',login);

router.get('/test',auth,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to protected route of test'
    });
})

router.get('/student',auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to protected route of student'
    });
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to protected route of admin'
    });
})

module.exports = router; 
