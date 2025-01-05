import express from "express";

import * as user_controller from "../controllers/user_control.js";

const router = express.Router();

router.post("/", user_controller.createUser);
router.get("/", user_controller.getUser);
export default router;