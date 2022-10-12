import express from "express";
import { loginUser } from "../controllers/signin.js";
import { registerUser } from "../controllers/register.js";

const router = express.Router();

// HTTP Requests from front end
router.post("/signin", loginUser);
router.post("/register", registerUser);

export default router;
