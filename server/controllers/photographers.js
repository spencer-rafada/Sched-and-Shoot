import Photographer from "../models/photographerSchema.js";
import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("photographers");

// Turn this to async as well
export const getPhotographers = async (req, res) => {
  try {
    await client.connect();

    const cursor = coll.find();

    // takes the [0] of the array
    const data = await cursor.toArray();

    res.json(data);
  } finally {
    await client.close();
  }
  console.log("GET");
};

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
};

export const deletePhotographer = async (req, res) => {
  try {
    await client.connect();
    const data = req.body[0];

    const result = await coll.deleteMany(data);
    console.log(result);
  } finally {
    await client.close();
  }
  console.log("DELETE");
};

export const updatePhotographer = async (req, res) => {
  try {
    await client.connect();

    console.log(req.body);
    const data = req.body[0];

    const filter = { first_name: data.first_name };
    const updateData = { $set: { first_name: data.updateData } };

    const result = await coll.updateOne(filter, updateData);
  } finally {
    await client.close();
  }
  console.log("PUT");
};
