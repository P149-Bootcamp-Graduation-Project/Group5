require('dotenv').config({ path: __dirname+'/.env' });
const createConsumerTemperature = require('./app/adapters/queue/consumerTemp');


createConsumerTemperature();