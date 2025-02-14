import express from 'express';
import { convertLength } from '../controllers/lengthController';

const router = express.Router();

router.get("/convert", convertLength);
router.post("/convert", convertLength);

export default router;
