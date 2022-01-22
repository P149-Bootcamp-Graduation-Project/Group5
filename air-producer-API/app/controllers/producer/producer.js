const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const producer = kafka.producer();

let incomingMessage = "";
let is_producer_conn = false;

const airErrGet = async (req, res, err) => {
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
        topic: "Air-sensor",
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
      topic: "Air-sensor",
      req_path: "/air",
      err_func: "createProducer",
      content_err: error,
    };
    airErrGet(errData);
  }
}

createProducer();

const airDataGet = async (req, res) => {
  await createProducer("-> ").then(async () => {
    try {
      res.send(JSON.stringify(incomingMessage));
    } catch (error) {
      console.log("[ERROR] : ", error);
      const errData = {
        pwd: "./app/controllers/producer/producer.js",
        topic: "Air-sensor",
        req_path: "/air",
        err_func: "airDataGet",
        content_err: error,
      };
      airErrGet(errData);
    }
  });
  res.end();
};

const airDataPost = async (req, res) => {
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
      topic: "Air-sensor",
      req_path: "/air",
      err_func: "airDataPost",
      content_err: error,
    };
    airErrGet(errData);
  }
};

module.exports = {
  airDataGet,
  airDataPost,
  airErrGet,
};
