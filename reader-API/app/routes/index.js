const userRouter = require("./userRouter");
const sensorRouter = require("./sensorRouter");
const schoolRouter = require("./schoolRouter");
const logTempRouter = require("./logTempRouter");
const logElecRouter = require("./logElecRouter");
const logAirRouter = require("./logAirRouter");
const classRouter = require("./classRouter");

module.exports = {
  userRouter,
  classRouter,
  schoolRouter,
  sensorRouter,
  logAirRouter,
  logElecRouter,
  logTempRouter,
};
