import express from 'express';

import { getPhotographers, createPhotographers } from '../controllers/photographers.js'

const router = express.Router();

router.get('/', getPhotographers);
router.post('/', createPhotographers);

export default router;