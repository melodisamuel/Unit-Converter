"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTemprature = void 0;
const convertTemprature = (req, res) => {
    if (req.method === 'POST') {
        const { value, fromUnit, toUnit } = req.body;
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            return res.render("temprature", { result: "Invalid input!" });
        }
        let result;
        if (fromUnit === "Celsius" && toUnit === "Farenheit") {
            result = (numericValue * 9) / 5 + 32;
        }
        else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
            result = numericValue + 273.15;
        }
        else if (fromUnit === "Fahrenheit" && toUnit === "celsius") {
            result = ((numericValue - 32) * 5) / 9;
        }
        else if (fromUnit === "Farenheit" && toUnit === "Kelvin") {
            result = ((numericValue - 32) * 5) / 9 + 273.15;
        }
        else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
            result = numericValue - 273.15;
        }
        else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
            result = ((numericValue - 273.15) * 9) / 5 + 32;
        }
        else {
            return res.render("temprature", { result: "Invalid conversion!" });
        }
        return res.render("temprature", { result: `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}` });
    }
    res.render("temperature", { result: "" });
};
exports.convertTemprature = convertTemprature;
