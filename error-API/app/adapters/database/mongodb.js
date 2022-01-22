const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("::> MongoDB Server is Ready");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

exports.mongo_client = client;

/* CREATE COLLECTION EXAMPLE
const db = mongo_client.db('kisi');
db.createCollection('kisiler', (err, result) => {
    if (err) throw err;
    console.log('Koleksiyon oluşturuldu.');
    mongo_client.close();
});*/
