const mongoose = require("mongoose");

const ConnectDb = async() => {
    try{
    await mongoose.connect(process.env.env.MONGO_URI);
    console.log("MOngo Db conencted Successfully");
    }catch(error){
        console.log("DB Connection Failed",error.message);
        process.exit(1);
    }
};
module.exports = ConnectDb;