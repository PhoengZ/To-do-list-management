import mongoose, { Schema } from "mongoose";

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
        type:[String],
        required:true
    }
});

const User = mongoose.model("User",userSchema,"User");

export default User;
