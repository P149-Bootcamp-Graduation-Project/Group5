const moment = require("moment");
const { mongo_client } = require("./../adapters/database/mongodb");

exports.logErrors = async (error, data) => {
  console.error(error.message, data);
  const errmessage = error.message;
  const app_path = data.app_path;
  const line_num = data.line_num;
  const createdAt = moment().format("DD/MM/YYYY HH:mm:ss");

  const db = mongo_client.db("grup5");
  const collection = db.collection("errorlogs");
  collection.insertOne({
    errmessage: `${errmessage}`,
    app_path: `${app_path}`,
    line_num: `${line_num}`,
    createdAt: `${createdAt}`
  });
};

exports.errorList = async (req, res) => {
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
