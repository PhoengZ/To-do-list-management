import express from "express";
import cors from "cors";

import userRoute from "./route/userRoute.js"

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/user", userRoute);



export default app;