const express = require("express");
const router = express.Router();
const createConsumerTemperature = require("../adapters/queue/consumerTemp")


router.route('/',createConsumerTemperature());

module.exports = router;

