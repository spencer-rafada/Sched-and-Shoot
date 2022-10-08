import express from "express";
import { loginUser } from "../controllers/signin.js";

const router = express.Router();

// HTTP Requests from front end
router.post("/", loginUser);

export default router;
