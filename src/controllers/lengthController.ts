import { error } from 'console';
import { Request, Response } from 'express';
import { ParsedQs } from 'qs'



export const convertLength = (req: Request, res: Response) => {
    try {
          // Extract query parameters and cast them as strings
          const value = req.query.value as string;
          const fromUnit = req.query.fromUnit as string;
          const toUnit = req.query.toUnit as string;
  

        if(!value || !fromUnit || !toUnit) {
            return res.status(400).json({ error: "Missing required parameters: value."})
        }

        //Convert value to a number
        const inputValue = parseFloat(value as string);
        if(isNaN(inputValue)) {
            return res.status(400).json({ error: 'Invalid value. Must be a number'})
        }

        // Define conversion factors based on meters (m)
        const lengthUnits: Record<string, number> = {
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
        if(!lengthUnits[fromUnit] || !lengthUnits[toUnit]) {
            return res.status(400).json({ error: "invalid unit. Use: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile."});
        }

        const valueInMeters = inputValue * lengthUnits[fromUnit as string];

        // Convert from meters to target unit
        const convertedValue = valueInMeters / lengthUnits[toUnit as string];

        // Send the response
        return res.json({
            originalValue: inputValue,
            fromUnit,
            toUnit,
            convertedValue,

        })

        
    } catch (error) {
        return res.status(500).json({ error: "Internal server Error"})
    }
};