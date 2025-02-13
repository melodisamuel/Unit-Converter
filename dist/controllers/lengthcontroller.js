"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLength = void 0;
const convertLength = (req, res) => {
    try {
        // Extract query parameters and cast them as strings
        const value = req.query.value;
        const fromUnit = req.query.fromUnit;
        const toUnit = req.query.toUnit;
        if (!value || !fromUnit || !toUnit) {
            return res.status(400).json({ error: "Missing required parameters: value." });
        }
        //Convert value to a number
        const inputValue = parseFloat(value);
        if (isNaN(inputValue)) {
            return res.status(400).json({ error: 'Invalid value. Must be a number' });
        }
        // Define conversion factors based on meters (m)
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
        // Validate if units exist
        if (!lengthUnits[fromUnit] || !lengthUnits[toUnit]) {
            return res.status(400).json({ error: "invalid unit. Use: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile." });
        }
        const valueInMeters = inputValue * lengthUnits[fromUnit];
        // Convert from meters to target unit
        const convertedValue = valueInMeters / lengthUnits[toUnit];
        // Send the response
        return res.json({
            originalValue: inputValue,
            fromUnit,
            toUnit,
            convertedValue,
        });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server Error" });
    }
};
exports.convertLength = convertLength;
