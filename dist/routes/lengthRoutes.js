"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lengthController_1 = require("../controllers/lengthController");
const router = express_1.default.Router();
router.get("/convert", lengthController_1.convertLength);
router.post("/convert", lengthController_1.convertLength);
exports.default = router;
