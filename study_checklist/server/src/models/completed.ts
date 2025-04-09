import mongoose from "mongoose";

const completedSchema = new mongoose.Schema({
    completedlist:String
})
const completed = new mongoose.model('completed',completedSchema)
export default completed