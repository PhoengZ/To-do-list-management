import {createUser} from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector('.login-user');
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault();
        submitRegister();
    });
});


async function submitRegister(){
    let Username = document.querySelector("#user-input").value;
    let password = document.querySelector("#user-password").value;
    if (Username == "" || password == ""){
        document.querySelector("#user-input").value = "";
        document.querySelector("#user-password").value ="";
        return;
    }
    const payload ={
        username: Username,
        password: password,
        List: []
    };
    try{
        await createUser(payload);
        console.log("registeration complete!");
        
    }catch (eror){
        console.log("eror_regis");
    }
}