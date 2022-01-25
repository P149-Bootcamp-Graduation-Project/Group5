require("dotenv").config({ path: `${__dirname}/.env` });
const errorRoute = require("./app/routes/errorRoute");
global.express = require("express");
global.app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", errorRoute);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () =>
  console.log(
    `Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  )
);
