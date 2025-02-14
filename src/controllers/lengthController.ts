import { Request, Response } from "express";

export const convertLength = (req: Request, res: Response) => {
    // let convertedValue: number | null = null;

    if (req.method === "GET") {
        return res.render("length", { convertedValue: null });
    } else if (req.method === "POST") {
        const { value, unitFrom, unitTo } = req.body;
        let convertedValue: number | string = "Invalid Conversion";

        const conversions: Record<string, Record<string, number>> = {
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
