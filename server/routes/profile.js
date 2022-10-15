import express from "express";
import { getProfile, editProfile } from "../controllers/profile.js";

const router = express.Router();

// HTTP Requests
router.post("/", getProfile);
router.put("/edit", editProfile);

export default router;
