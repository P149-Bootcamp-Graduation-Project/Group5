const { rd_client } = require("../../adapters/database/redis");
const Sensor = require("../../models/sensor");
const errorHandler = require("../error/error");

const getSensors = async (req, res) => {
  const cacheKey = "sensors";

  let cacheEntry = await rd_client.get(cacheKey);

  if (cacheEntry) {
    cacheEntry = JSON.parse(cacheEntry);
    res.status(200).json({ ...cacheEntry, source: "from cache" });
  }

  try {
    const data = await Sensor();

    rd_client.setEx(cacheKey, 30000, JSON.stringify(data));

    res.status(200).json({ ...data, source: "from database" });
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getSensors };
