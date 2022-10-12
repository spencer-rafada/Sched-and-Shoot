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
    const data = req.body[0];
    //console.log(data);
    const email = data.email;
    // Uncomment this when you choose to integrate username
    // const username = data.username;
    const password = data.password;

    // Find email and password or username and password in collection
    const email_password_cursor = coll.find({
      email: email,
      password: password,
    });
    // Uncomment this and test if you choose to integrate username or password in front end
    // const email_password_cursor = coll.find({
    //   $or: [
    //     {
    //       // check for email and password
    //       $and: [{ email: email, password: password }],
    //     },
    //     { $and: [{ username: username, password: password }] },
    //   ],
    // });
    // Convert cursor to array
    const list = await email_password_cursor.toArray();
    //console.log(list);
    // If the email and password is correct
    if (list.length === 1) {
      res.json({ token: "token1234" });
    } else {
      // send error if not found
      res.json({ message: "Cannot identify" });
    }
  } finally {
    await client.close();
  }
};
