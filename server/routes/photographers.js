import express from "express";
import {
  getPhotographers,
  createPhotographer,
  deletePhotographer,
  updatePhotographer,
} from "../controllers/photographers.js";

const router = express.Router();

router.get("/", getPhotographers);
router.post("/", createPhotographer);
router.delete("/", deletePhotographer);
router.put("/", updatePhotographer);

export default router;
