import  express  from "express";
import path from 'path';
import bodyParser from "body-parser";

import lengthRoutes from "../src/routes/lengthRoutes";
import weightRoutes from "../src/routes/weightRoutes";
import tempratureRoutes from "../src/routes/tempratureRoutes";


const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

Define Routes
app.use("/length", lengthRoutes);
app.use("/weight", weightRoutes);
app.use("/temprature", tempratureRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Unit Converter");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

