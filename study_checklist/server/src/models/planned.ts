import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    todolist:String
})

const planned =  mongoose.model('planned',todoSchema)
export default planned