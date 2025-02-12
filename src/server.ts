import  express  from "express";
import path from 'path';
import bodyParser from "body-parser";

// import lengthRoutes from "../src/routes/lengthRoutes";
// import weightRoutes from "../src/routes/weightRoutes";
// import tempratureRoutes from "../src/routes/tempratureRoutes";


const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
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
        <a href="/temprature">Temprature</a>`
    );
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
