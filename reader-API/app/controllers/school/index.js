const { rd_client } = require("../../adapters/database/redis");
const School = require("../../models/school");
const errorHandler = require("../error/error");

const getSchool = async (req, res) => {
  const cacheKey = "schools";

  let cacheEntry = await rd_client.get(cacheKey);

  if (cacheEntry) {
    cacheEntry = JSON.parse(cacheEntry);
    res.status(200).json({ ...cacheEntry, source: "from cache" });
  }

  try {
    const data = await School();

    await rd_client.setEx(cacheKey, 180, JSON.stringify(data));

    res.status(200).json({ ...data, source: "from database" });
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getSchool };
