"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLength = void 0;
const convertLength = (req, res) => {
    if (req.method === "GET") {
        return res.render("length");
    }
    else if (req.method === "POST") {
        const { value, unitFrom, unitTo } = req.body;
        let convertedValue = "Invalid Conversion";
        const conversions = {
            meters: { meters: 1, kilometers: 0.001, centimeters: 100, inches: 39.37, feet: 3.281 },
            kilometers: { meters: 1000, kilometers: 1, centimeters: 100000, inches: 39370, feet: 3281 },
            centimeters: { meters: 0.01, kilometers: 0.00001, centimeters: 1, inches: 0.3937, feet: 0.03281 },
            inches: { meters: 0.0254, kilometers: 0.0000254, centimeters: 2.54, inches: 1, feet: 0.08333 },
            feet: { meters: 0.3048, kilometers: 0.0003048, centimeters: 30.48, inches: 12, feet: 1 }
        };
        if (conversions[unitFrom] && conversions[unitFrom][unitTo]) {
            convertedValue = Number(value) * conversions[unitFrom][unitTo];
        }
        return res.render("length", { convertedValue });
    }
};
exports.convertLength = convertLength;
