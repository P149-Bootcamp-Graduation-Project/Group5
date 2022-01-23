const { rd_client } = require("../../adapters/database/redis");
const LogElectricity = require("../../models/logElectricity");
const errorHandler = require("../error/error");

const getLogElectricity = async (req, res) => {
  const cacheKey = "log-electricity";

  let cacheEntry = await rd_client.get(cacheKey);

  if (cacheEntry) {
    cacheEntry = JSON.parse(cacheEntry);
    res.status(200).json({ ...cacheEntry, source: "from cache" });
  }

  try {
    const data = await LogElectricity();

    await rd_client.setEx(cacheKey, 180, JSON.stringify(data));

    res.status(200).json({ ...data, source: "from database" });
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getLogElectricity };
