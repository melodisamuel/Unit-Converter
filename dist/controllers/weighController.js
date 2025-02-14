"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWeight = void 0;
const convertWeight = (req, res) => {
    if (req.method === "POST") {
        const { value, fromUnit, toUnit } = req.body;
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            return res.render("weight", { result: "Invalid input" });
        }
        const conversionRates = {
            milligram: 0.001,
            gram: 1,
            kilogram: 1000,
            ounce: 28.3495,
            pound: 453.592
        };
        if (!(fromUnit in conversionRates) || !(toUnit in conversionRates)) {
            return res.render("weight", { result: "Invalid conversion!" });
        }
        const result = (numericValue * conversionRates[fromUnit]) / conversionRates[toUnit];
        return res.render("weight", { result: `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}` });
    }
    res.render("weight", { result: "" });
};
exports.convertWeight = convertWeight;
