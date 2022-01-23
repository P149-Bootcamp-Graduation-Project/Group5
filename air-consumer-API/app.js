require('dotenv').config({ path: __dirname+'/.env' });
const express = require('express');
const app = express();
const router = require('./app/routes/consumerRoute')


app.use('/',router);

app.listen(process.env.APP_PORT, function() {

    console.log("Server is ready");
})


