import express from 'express';
import { convertTemprature } from '../controllers/tempratureController';

const router = express.Router();

router.get("/convert", convertTemprature);
router.post("/convert", convertTemprature);

export default router;