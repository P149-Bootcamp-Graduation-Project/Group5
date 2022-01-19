require('dotenv').config({ path: __dirname+'/.env' });
const createConsumerAir = require('./app/adapters/queue/consumerAir');

createConsumerAir();
