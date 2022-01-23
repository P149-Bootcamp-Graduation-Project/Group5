const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  await client
    .db(process.env.MONGO_DEFAULT_DB)
    .command({ ping: 1 })
    .then(() => {
      console.log("::> MongoDB Server is Ready");
    })
    .catch((err) => {
      console.log(err);
    });
}
run().catch(console.dir);

exports.mongo_client = client;
