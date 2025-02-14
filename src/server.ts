import  express  from "express";
import path from 'path';
import bodyParser from "body-parser";

import lengthRoutes from "./routes/lengthRoutes";
import weightRoutes from "./routes/weightRoutes";
import temperatureRoutes from "./routes/temperatureRoutes";


const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs");

// Define Routes
app.use("/length", lengthRoutes);
app.use("/weight", weightRoutes);
app.use("/temperature", temperatureRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Unit Converter");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

