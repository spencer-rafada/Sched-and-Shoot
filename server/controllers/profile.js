import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("users");

// getUser Data
export const getProfile = async (req, res) => {
  try {
    await client.connect();

    const cursor = coll.find();
  } finally {
    await client.close();
  }
};
