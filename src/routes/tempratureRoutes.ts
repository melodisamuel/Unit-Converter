import express from 'express';
import { convertTemprature } from '../controllers/tempratureController';

const router = express.Router();

router.get("/", convertTemprature);
router.post("/", convertTemprature);

export default router;