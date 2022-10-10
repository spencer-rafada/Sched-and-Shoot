import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://snaptester02:C9po8wNAeMIiz3v1@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);
const db = client.db("test");
const coll = db.collection("users");

export const loginUser = async (req, res) => {
  try {
    // Connect to collection
    await client.connect();

    // Get user data from req.body
    // console.log(req.body);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    // Find email and password or username and password in collection
    const email_password_cursor = coll.find({
      $or: [
        {
          // check for email and password
          $and: [{ email: email, password: password }],
        },
        { $and: [{ username: username, password: password }] },
      ],
    });
    // Convert cursor to array
    const data = await email_password_cursor.toArray();
    // If the email and password is correct
    if (data.length === 1) {
      res.json({ token: "token1234" });
    } else {
      // send error if not found
      res.json({ message: "Cannot identify" });
    }
  } finally {
    await client.close();
  }
};
