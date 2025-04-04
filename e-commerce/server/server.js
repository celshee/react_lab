
// creaeting restfull endpoints 
import express from 'express';
import mongoose from 'mongoose';
import Course from './models/courses.js'; // Notice the `.js` is required
import Dbconnect from './config/db.js';
// const Course  = require('./models/courses');

const app = express()
 
// app.post()

Dbconnect();
//get alll cources
app.get('/',()=>{
const obj = Course.find()
});


app.listen();



// purchase courses