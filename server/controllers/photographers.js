import Photographer from '../models/photographerSchema.js';


// Turn this to async as well
export const getPhotographers = (req, res) => {
    res.json({message: "GET new photographer"})
    console.log("GET")
}

export const createPhotographer = async (req, res) => {
    const data = req.body;
    try {
        const photographer = new Photographer(data);
        await photographer.save();
    } catch (error) {
        console.log(error);
    }
}

export const deletePhotographer = (req, res) => {
    res.json({message: "DELETE new photographer"})
}
