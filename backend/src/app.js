import express from "express";
import cors from "cors";

import userRoute from "./route/userRoute.js"

const app = express();
//app.use(express.json()): 
//This middleware is used to parse incoming JSON request bodies, allowing the server to handle requests that contain JSON.
//app.use(express.urlencoded({ extended: true })): 
//This middleware parses incoming requests with URL-encoded payloads (like form data) and makes it accessible as req.body.

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/user", userRoute);

//app.use(cors()): 
//Enables Cross-Origin Resource Sharing (CORS), allowing requests from other domains or ports. 
//This is useful if your frontend is hosted on a different port than your backend.

export default app;