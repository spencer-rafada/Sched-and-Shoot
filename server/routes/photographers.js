import express from 'express';
import cors from 'cors'

import { getPhotographers, createPhotographer, deletePhotographer } from '../controllers/photographers.js'

const router = express.Router();

router.get('/', getPhotographers);
router.post('/', cors(), createPhotographer);
router.delete('/', deletePhotographer)

export default router;