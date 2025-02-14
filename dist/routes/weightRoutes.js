"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weightController_1 = require("../controllers/weightController");
const router = express_1.default.Router();
router.get("/", weightController_1.convertWeight);
router.post("/", weightController_1.convertWeight);
exports.default = router;
