import express from 'express';
import { getPhotographers, createPhotographer, deletePhotographer } from '../controllers/photographers.js'

const router = express.Router();

router.get('/', getPhotographers);
router.post('/', createPhotographer);
router.delete('/', deletePhotographer)

export default router;