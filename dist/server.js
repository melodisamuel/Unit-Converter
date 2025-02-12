"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
// import lengthRoutes from "../src/routes/lengthRoutes";
// import weightRoutes from "../src/routes/weightRoutes";
// import tempratureRoutes from "../src/routes/tempratureRoutes";
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("view engine", "ejs");
// Define Routes
// app.use("/length", lengthRoutes);
// app.use("/weight", weightRoutes);
// app.use("/temprature", tempratureRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to the Unit Converter</h1>
        <a href="/length">Length</a> |
        <a href="/weight">Weight</a> |
        <a href="/temprature">Temprature</a>`);
});
// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
