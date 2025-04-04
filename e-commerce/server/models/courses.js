import mongoose from 'mongoose';

const coursesSchema = mongoose.Schema({
    cname:String,
    img:String,
    desc:String,
    price:Number
})

const Course = mongoose.model('Course',coursesSchema)

export default Course;