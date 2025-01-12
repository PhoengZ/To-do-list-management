import express from "express";

import * as user_controller from "../controllers/user_control.js";
import * as task_controller from "../controllers/taskController.js";
const router = express.Router();

router.post("/register", user_controller.createUser);
router.post("/login", user_controller.loginUser);
router.put("/task/edit",task_controller.editTask);
router.put("/task/delete",task_controller.deleteTask);

export default router;