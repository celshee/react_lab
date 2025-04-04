//connection initiating logic with function

// const dotenv = require('dotenv')//importing
// const mongoose = require('mongoose')

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();//blackbox access env variable 

const Dbconnect=async () =>{
    try{
        const conn = await mongoose.connect(process.env.Mongo_url);
        console.log("db connected successfully");
        
    }
    catch(err){
        console.log("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

export default Dbconnect;