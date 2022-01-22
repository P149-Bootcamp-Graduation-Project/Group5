const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const producer = kafka.producer();

let incomingMessage = "";
let is_producer_conn = false;

const tempErrGet = async (req, res, err) => {
  if (!isNaN(err)) {
    res.send(err);
  }
  res.end();
};

async function createProducer(data) {
  try {
    if (!is_producer_conn) {
      console.log("Producer is  connecting...");
      await producer.connect();
      console.log("Producer connect successful!");
      is_producer_conn = true;
    } else {
      const message_res = await producer.send({
        topic: "Temperature-sensor",
        messages: [
          {
            value: JSON.stringify(data),
            partition: 0,
          },
        ],
      });
    }
  } catch (error) {
    console.log("[ERROR] : ", error);
    const errData = {
      pwd: "./app/controllers/producer/producer.js",
      topic: "Temperature-sensor",
      req_path: "/temp",
      err_func: "createProducer",
      content_err: error,
    };
    tempErrGet(errData);
  }
}

createProducer();

const tempDataGet = async (req, res) => {
  await createProducer("-> ").then(async () => {
    try {
      res.send(JSON.stringify(incomingMessage));
    } catch (error) {
      console.log("[ERROR] : ", error);
      const errData = {
        pwd: "./app/controllers/producer/producer.js",
        topic: "Temperature-sensor",
        req_path: "/temp",
        err_func: "createProducer",
        content_err: error,
      };
      tempErrGet(errData);
    }
  });
  res.end();
};

const tempDataPost = async (req, res) => {
  try {
    const obj = req.body;
    if (!obj) {
      console.log("400 -> Bad request");
    } else {
      console.log("Temp-Data -> ", obj);
      await createProducer(obj).then(async () => {
        res.send(JSON.stringify(incomingMessage));
      });
    }
    res.end();
  } catch (error) {
    console.log("[ERROR] : ", error);
    const errData = {
      pwd: "./app/controllers/producer/producer.js",
      topic: "Temperature-sensor",
      req_path: "/temp",
      err_func: "createProducer",
      content_err: error,
    };
    tempErrGet(errData);
  }
};

module.exports = {
  tempDataGet,
  tempDataPost,
  tempErrGet,
};
