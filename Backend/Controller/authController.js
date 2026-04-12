const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// id generate token
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    });
};

//Register User
const  registerUser = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
             return res.status(400).json({message:"User already exists"});
        }
    }
}
