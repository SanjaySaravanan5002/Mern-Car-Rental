const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const protect = async(req,res,next)=>{
    let token;
    try{
        //check token headers;
        if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
            //extract token
            token = req.headers.authorization.split(" ")[1];
            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            //get user from db without password
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }else{
            return res.status(401).json({messsage:"No TOken ,access denied"});
        }
    }catch(error){
        return res.status(500).json({message:"TOken Invalid"});
    }
};
module.exports = protect;