import express from 'express';
import { convertWeight } from '../controllers/weightController';

const router = express.Router();

router.get("/", convertWeight);
router.post("/", convertWeight);

export default router;