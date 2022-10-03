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

        // update code goes here
        const filter = {"first_name": "Michael"};
        const updateDoc = {$set: {first_name: "Nelson"}};

        const result = await coll.updateMany(filter, updateDoc);

        // amount deleted code goes here
        console.log(`Number of documents updated: ${result.modifiedCount}`)

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);