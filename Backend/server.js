require("dotenv").config();
const  express = require("express");
const cors = require("cors");
const ConnectDb = require("./Config/Db");
const app = express();
//DB Connection
ConnectDb();
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("api/auth",require("Routes/Auth"));

//test route
app.get("/",(req,res)=>{
    res.send("ApI is running");
});

//server
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});




