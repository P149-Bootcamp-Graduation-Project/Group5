require('dotenv').config({ path: __dirname+'/.env' });
global.express = require("express");
global.app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/libs/swagger/swagger.json');
const { logTempRouter, logAirRouter, logElecRouter, userRouter, schoolRouter, sensorRouter, classRouter } = require('./app/routes');

app.use(express.json())

//routes
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use('/user',userRouter);
app.use('/class',classRouter);
app.use('/sensor',sensorRouter);
app.use('/school',schoolRouter);
app.use('/log-air',logAirRouter);
app.use('/log-elec',logElecRouter);
app.use('/log-temp',logTempRouter);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => console.log(`Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`));

