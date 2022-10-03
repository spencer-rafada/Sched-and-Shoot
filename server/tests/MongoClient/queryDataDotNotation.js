import { MongoClient } from 'mongodb';

// This test makes use of the mongodb package which differs from the mongoose driver for Node and MongoDB atlas.
// This test also shows how to query from the results with dot notation and operators

const URL = 'mongodb+srv://snaptester02:GGKLSo7LHSJUVR4O@oh-snap.99pknxd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(URL);

async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("test");
        const coll = db.collection("photographers");

        // find code goes here
        // find has implicit AND operator
        const and = coll.find({
            "age": {$gt: 20},
            "city": 'Rexburg'
        });
        // Can be written as ... 
        // const or = coll.find({$and: [{
        //     "age": {$gt: 20},
        //     "city": 'Rexburg'
        // }]);

        const or = coll.find({
            $or: [{"age": {$lt: 20}}, {"city": "Tarlac"}]
        })

        // iterate code goes here
        console.log(`AND operator to find`);
        await and.forEach(console.log);

        console.log(`OR operator to find`);
        await or.forEach(console.log);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);