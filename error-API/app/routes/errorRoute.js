const express = require("express");
const { errorList, logErrors } = require("./../controllers/errorController");

const router = express.Router();

router.route("/err").get(errorList).post(logErrors);

module.exports = router;
