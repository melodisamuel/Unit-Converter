"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const lengthRoutes_1 = __importDefault(require("./routes/lengthRoutes"));
const weightRoutes_1 = __importDefault(require("./routes/weightRoutes"));
const temperatureRoutes_1 = __importDefault(require("./routes/temperatureRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("views", path_1.default.join(__dirname, 'views'));
app.set("view engine", "ejs");
// Define Routes
app.use("/length", lengthRoutes_1.default);
app.use("/weight", weightRoutes_1.default);
app.use("/temperature", temperatureRoutes_1.default);
// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Unit Converter");
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
