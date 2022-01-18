const {
  createProducerTemp,
  createProducerAir,
  createProducerElectricity,
} = require("../adapters/kafka/producer");

const {
  createConsumerTemp,
  createConsumerAir,
  createConsumerElectricity,
} = require("../adapters/kafka/consumer");

const tempGet = async (req, res) => {
  await createProducerTemp("#1 message =>").then(async () => {
    await createConsumerTemp().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

const tempPost = async (req, res) => {
  const obj = req.body;
  if (!obj) {
    console.log("Fill empty fields");
  }
  console.log("Data :", obj);
  await createProducerTemp(obj).then(async (data) => {
    await createConsumerTemp().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

const airGet = async (req, res) => {
  await createProducerAir("#1 message =>").then(async () => {
    await createConsumerAir().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

const airPost = async (req, res) => {
  const obj = req.body;
  if (!obj) {
    console.log("Fill empty fields");
  }
  console.log("Data :", obj);
  await createProducerAir(obj).then(async (data) => {
    await createConsumerAir().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

const electricityGet = async (req, res) => {
  await createProducerElectricity("#1 message =>").then(async () => {
    await createConsumerElectricity().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

const electricityPost = async (req, res) => {
  const obj = req.body;
  if (!obj) {
    console.log("Fill empty fields");
  }
  console.log("Data :", obj);
  await createProducerElectricity(obj).then(async (data) => {
    await createConsumerElectricity().then(() => {
      res.send(JSON.stringify(incomingMessage));
    });
  });
  res.end();
};

module.exports = {
  tempGet,
  tempPost,
  airGet,
  airPost,
  electricityGet,
  electricityPost,
};
