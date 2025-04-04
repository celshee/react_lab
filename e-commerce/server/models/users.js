import courses from "./courses"
import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema({
    uname:String,
    passcode:String,
    pcources:{type:mongoose.Schema.Types.ObjectId,ref:'courses'}
})

const Users = mongoose.model('Users',usersSchema)


export default Users;