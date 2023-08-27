const User = require('../module/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("dotenv").config();

exports.signUp = async (req,res)=>{
    try{
        const {name,email,password,role} = req.body;
        const existingUser =await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists'
            });
        }
        let hashedPassword; 
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'could not hash the password ,please register again'
            })
        }
        const user = User.create({
            name,email,password:hashedPassword,role
        })
        res.status(200).json({
            success:true,
            message:'new user signed up successfully'
        })
    }
    catch(error){
        console.log('issue in signup ,please do it again');
        return res.status(200).json({
            success:false,
            message:"issue in signup ,please do it again"
        })
    }
}

exports.login = async (req,res)=>{
    try{

        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all details, And try again"
            })
        }
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"Not already Registered , please signin first"
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }

        if(await bcrypt.compare(password,user.password)){

            const token = jwt.sign(payload,
                process.env.JWT_KEY,
                {
                    expiresIn:"2h",
                }
            );
            
            user = user.toObject()
            user.token = token;
            user.password = undefined;

            const options = {
                expires : new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly : true
            }
            return res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully",
            })

        }else{
            return res.status(400).json({
                success:false,
                message:"Invalid Password"
            })
        }
    
    }catch(error){
        console.log(error)
        return res.status(500).json({ 
            success:false,
            message:"Login Failer"
        })
    }

}