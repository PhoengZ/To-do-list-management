import { createConnection } from "net";
import User from "../model/user_model.js";

export async function createUser(req,res) {
    try{
        const {Username,password,List} = req.body;
        const newUser = new User({
            Username,
            password,
            List
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    }catch(eror){
        console.error(eror);
        res.status(500).json({ message: "Error creating user" });
    }
}
export async function getUser(){
    try {

    }catch(eror){

    }
}