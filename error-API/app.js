require("dotenv").config({ path: `${__dirname}/.env` });
const errorRoute = require("./app/routes/errorRoute");
const { mongo_client } = require("./app/adapters/database/mongodb");
global.express = require("express");
global.app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", errorRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`server up and running on PORT : ${port}`);
});
