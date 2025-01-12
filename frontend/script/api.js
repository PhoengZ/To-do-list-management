import { Backend_URL } from "./config.js";
export async function createUser(payload) {
    try{
        console.log(Backend_URL);
        const response = await fetch(`${Backend_URL}/user/register`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok){
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.message}`);
        }
        return await response.json();
    }catch(eror){
        console.error("Failed to create user:", error.message);
        throw error;
    }
}