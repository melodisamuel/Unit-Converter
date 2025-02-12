"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.render('length');
});
router.post("/", (req, res) => {
    const { value, from, to } = req.body;
    const lengthUnits = {
        milimeter: 0.001,
        centimeter: 0.01,
        meter: 1,
        kilometer: 1000,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34
    };
    const result = (parseFloat(value) * lengthUnits[from]) / lengthUnits[to];
    res.render("length", { value, from, to, result });
});
exports.default = router;
