import User from "../model/user_model.js";


export async function editTask(req,res){
    const {username,tName,newTaskname,describetion,date} = req.body;
    let user = await User.find({Username:username});
    if (user.length == 0)res.status(400).json({message:"User's not found"});
    for (let i = 0;i<user[0].List.length;i++){
        if (user[0].List[i].taskName == tName){
            user[0].List[i].taskName = newTaskname;
            user[0].List[i].describtion = describetion;
            user[0].List[i].schedule = date;
            break;
        }
    }
    res.status(200).json({message:"Edit complete"});
}
export async function deleteTask(req,res) {
    const {username,tName} = req.body;
    let user = await User.find({Username:username});
    if (user.length == 0)res.status(400).json({message:"User's not found"});
    let arr = user[0].List.filter(task => task.taskName != tName);
    user[0].List = arr;
    await user.save();
    res.status(200).json({message:"delete complete"});   
}