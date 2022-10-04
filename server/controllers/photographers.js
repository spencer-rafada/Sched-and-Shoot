import Photographer from '../models/photographerSchema.js';
import { MongoClient } from 'mongodb';

const URL = 'mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("photographers");

const cursor = coll.find();

// Turn this to async as well
export const getPhotographers = async (req, res) => {
    try {
        await client.connect(); 


        // takes the [0] of the array
        const data = await cursor.toArray();

        res.json(data);

    } finally {
        await client.close();
    }
    console.log("GET")
}

export const createPhotographer = async (req, res) => {
    try {
        await client.connect();

        console.log(req.body);
        const result = await coll.insertMany(req.body);
        console.log(result.insertedIds);

    } finally {
        await client.close();
    }

    console.log("POST");
}

export const deletePhotographer = (req, res) => {
    res.json({message: "DELETE new photographer"})
}
