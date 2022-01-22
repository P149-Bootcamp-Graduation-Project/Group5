const express = require("express");
const errorController = require("./../controllers/errorController");

const router = express.Router();

router.route("/error_list").get(errorController.errorList);

// router.route("/vehicle_delete/:id").delete(vehicleController.vehicle_delete);

module.exports = router;
