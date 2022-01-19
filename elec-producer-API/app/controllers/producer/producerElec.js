const { createProducerElectricity } = require("../../adapters/queue/kafka");

const electricityPost = async (req, res) => {
  await createProducerElectricity().then(async () => {
    res.status(200).json(payload);
  });
};

module.exports = {
  electricityPost,
};
