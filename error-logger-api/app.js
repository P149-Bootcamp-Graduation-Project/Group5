require("dotenv").config({ path: __dirname + "/.env" });
global.express = require("express");
global.app = express();
const { rd_client } = require("./app/adapters/database/redis");
const { pg_client } = require("./app/adapters/database/postgresql");
const { mongo_client } = require("./app/adapters/database/mongodb");
const { router } = require("./app/routes/routes");
//const swagger = require('./app/libs/swagger/autogen');
const expressSwagger = require("express-swagger-generator")(app);

//Global Variable
global.userIN = null;

app.use(express.json());
//app.set('view engine', 'ejs'); //FOR views Template engine

app.use(router);

app.get("/deneme", (req, res) => {
  res.status(200).send("hello");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () =>
  console.log(
    `Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  )
);
