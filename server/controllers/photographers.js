import Photographer from '../models/photographerSchema.js';

// Controller for Photographers router
// asynchronous function to get Photographers from database
export const getPhotographers = async (req, res) => {
    try{
        const photographers = await Photographer.find();

        res.status(200).json(photographers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// asynchronous function to post Photographers to database
export const createPhotographers = async (req, res) => {
    const photographer = req.body;

    const newPhotographer = new Photographer(photographer);

    try{
        await newPhotographer.save();

        res.status(201).json(newPhotographer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}