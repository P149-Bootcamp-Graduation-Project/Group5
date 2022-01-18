const { createProducerAir } = require("../../adapters/queue/kafka");

const airPost = async (req, res) => {
  await createProducerAir().then(() => {
    res.status(200).json({ status: "succed" });
  });
};

module.exports = {
  airPost,
};
