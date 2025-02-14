import express from 'express';
import { convertTemperature } from '../controllers/tempratureController';

const router = express.Router();

router.get("/convert", convertTemperature);
router.post("/convert", convertTemperature);

export default router;