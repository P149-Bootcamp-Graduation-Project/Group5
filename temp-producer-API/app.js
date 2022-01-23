require("dotenv").config({ path: __dirname + "/.env" });
global.express = require("express");
global.app = express();
const { router } = require("./app/routes/routes");
const expressSwagger = require("express-swagger-generator")(app);

//Global Variable
global.userIN = null;

//Middleware
app.use(express.json());

//Routes
app.use(router);

let options = {
  swaggerDefinition: {
    info: {
      description: "Node.js Express API with Swagger",
      title: "Inavitas Örnek Proje",
      version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/",
    produces: ["application/json"],
    schemes: ["http", "https"],
    securityDefinitions: {
      Bearer: {
        description:
          "Example value:- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmQwMGJhNTJjYjJjM",
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [{ Bearer: [] }],
    defaultSecurity: "Bearer",
  },
  basedir: __dirname, //app absolute path
  files: ["./app/controllers/**/*.js"], //Path to the API handle folder
};

module.exports = expressSwagger(options);
app.listen(process.env.APP_PORT, process.env.APP_HOST, () =>
  console.log(
    `Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  )
);
