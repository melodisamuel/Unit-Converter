"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tempratureController_1 = require("../controllers/tempratureController");
const router = express_1.default.Router();
router.get("/convert", tempratureController_1.convertTemperature);
router.post("/convert", tempratureController_1.convertTemperature);
exports.default = router;
