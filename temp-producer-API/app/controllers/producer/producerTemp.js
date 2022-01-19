const { createConsumerTemp } = require("../../adapters/queue/kafka");

const tempPost = async (req, res) => {
  await createConsumerTemp().then(async () => {
    res.status(200).json(payload);
  });
};

module.exports = {
  tempPost,
};
