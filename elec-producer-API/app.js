require("dotenv").config({ path: __dirname + "/.env" });
global.express = require("express");
global.app = express();
const { router } = require("./app/routes/routes");

//Global Variable
global.userIN = null;

//Middleware
app.use(express.json());

//Routes
app.use(router);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () =>
  console.log(
    `Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  )
);
