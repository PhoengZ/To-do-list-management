import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    describtion:{
        type:String,
        required:false
    },
    schedule:{
        type:Date,
        required:false
    }
});

const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true,
    },
    List:{
        type:[taskSchema],
        required:true
    }
});

const User = mongoose.model("User",userSchema,"User");

export default User;
