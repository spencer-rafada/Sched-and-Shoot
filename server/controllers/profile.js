import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("users");

// getUser Data
export const getProfile = async (req, res) => {
  // console.log(req.body[0].email);
  // Get email from HTTP request
  const email = req.body[0].email;
  try {
    await client.connect();

    // Find email in collection
    const cursor = coll.find({ email: email });

    // Send the data back to the user
    const data = await cursor.toArray();
    console.log(data);
    res.json(data);
  } finally {
    await client.close();
  }
};

export const editProfile = async (req, res) => {
  // Get data from HTTP request
  const data = req.body[0];
  console.log("Edit");
  try {
    await client.connect();
    const filter = { email: data.email };
    const updateData = {
      $set: {
        first: data.first,
        last: data.last,
        password: data.password,
        img: data.img,
      },
    };
    res.json({ message: "Profile has been edited" });
    const result = await coll.updateOne(filter, updateData);
  } finally {
    await client.close();
  }
};
