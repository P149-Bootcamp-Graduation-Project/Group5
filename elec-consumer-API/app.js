require('dotenv').config({ path: __dirname+'/.env' });
const createConsumerElectricity = require('./app/adapters/queue/consumerElec');




createConsumerElectricity();




