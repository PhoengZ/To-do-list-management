import {createUser} from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector('.login-user');
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault();
        submitRegister();
    });
});


async function submitRegister(){
    let username = document.querySelector("#user-input").value;
    let password = document.querySelector("#user-password").value;
    if (username == "" || password == ""){
        document.querySelector("#user-input").value = "";
        document.querySelector("#user-password").value ="";
        return;
    }
    const payload ={
        Username: username,
        password: password,
        List: [""]
    };
    try{
        await createUser(payload);
    }catch (eror){
        console.log("eror_regis");
    }
}