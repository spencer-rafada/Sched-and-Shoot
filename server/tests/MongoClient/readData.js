import { MongoClient } from 'mongodb';

// This test makes use of the mongodb package which differs from the mongoose driver for Node and MongoDB atlas.

const URL = 'mongodb+srv://snaptester02:GGKLSo7LHSJUVR4O@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(URL);

async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("test");
        const coll = db.collection("photographers");

        // find code goes here
        const cursor = coll.find();

        // iterate code goes here
        await cursor.forEach(console.log);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);