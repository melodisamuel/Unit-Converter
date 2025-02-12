import  express  from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render('length');
});

router.post("/", (req, res) => {
    const { value, from, to } = req.body;
    const lengthUnits: { [key: string]: number } = {
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
    res.render("length", { value, from, to, result});
});

export default router;