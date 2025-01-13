//import { createConnection } from "net";
import User from "../model/user_model.js";

export async function createUser(req,res) {
    try{
        const {username,password,List} = req.body;
        const isFound = await User.find({Username:username});
        if (isFound.length != 0)res.status(400).json({message:"username is already used"});
        const newUser = new User({
            Username:username,
            password:password,
            List:List
        });
        await newUser.save();
        res.status(200).json({ message: "User created successfully", user: newUser });
    }catch(eror){
        console.error(eror);
        res.status(500).json({ message: "Error creating user" });
    }
}
export async function loginUser(req,res){
    try {
        const {username,password} = req.body;
        const user = await User.find({Username:username});
        if (user.length == 0)res.status(400).json({message:"Useranme doesn't exist"});
        if (user[0].password != password)res.status(400).json({message:"password isn't correct"});
        res.status(200).json({message:"Login success"});
    }catch(eror){
        console.error(eror);
        res.status(500).json({message:"something wrong lol"});
    }
}