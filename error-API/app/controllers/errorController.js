const { mongo_client } = require("./../adapters/database/mongodb");

logErrors = async (req, res) => {
  const db = mongo_client.db("grup5");
  const log = req.body;
  console.log(log);
  await db
    .collection("errorlogs")
    .insertOne(log)
    .then((result) => {
      res.status(200).send(result);
      console.log("succes");
    })
    .catch((err) => {
      res.send(err);
    });
};

errorList = async (req, res) => {
  const db = mongo_client.db("grup5");
  const collection = db.collection("errorlogs");
  collection
    .find()
    .toArray()
    .then((results) => {
      res.render("index.ejs", { errors: results });
      // console.log(results);
    })
    .catch((error) => {
      res.redirect("/");
    });
};

module.exports = {
  logErrors,
  errorList,
};
