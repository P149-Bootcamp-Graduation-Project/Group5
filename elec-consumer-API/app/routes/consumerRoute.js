const express = require("express");
const router = express.Router();
const createConsumerElectricity = require('../adapters/queue/consumerElec')


router.route('/',createConsumerElectricity());
    

module.exports = router;

