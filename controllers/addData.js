import { startups } from "../data/data.js";
export const addData = (req, res) =>{
    const { name, industry, founded, country, continent, business_address, founders, employees, website, mission_statement, description, is_seeking_funding, has_mvp } = req.body;

    if (!name || !industry || !founded || !country || !continent || !business_address || !founders || !employees || !website || !mission_statement || !description || is_seeking_funding === undefined || has_mvp === undefined) {
        return res.status(400).json({ message: "All fields are required." });
    }

    startups.push({
        id : startups.length + 1,
        name,
        industry,
        founded,
        country,
        continent,
        business_address,
        founders,
        employees,
        website, 
        mission_statement, 
        description, 
        is_seeking_funding, 
        has_mvp
    })

    res.json({
        message: "Data added successfully",
        data: startups[startups.length - 1]
    });
}
