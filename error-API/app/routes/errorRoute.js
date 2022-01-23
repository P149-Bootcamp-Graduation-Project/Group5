const express = require("express");
const { errorList, logErrors } = require("./../controllers/errorController");

const router = express.Router();

router.route("/airErr").get(errorList).post(logErrors);

module.exports = router;
