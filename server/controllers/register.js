import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("users");

export const registerUser = async (req, res) => {
  console.log(req.body[0]);
  try {
    await client.connect();
    const result = await coll.insertMany(req.body);
  } finally {
    await client.close();
  }
};
