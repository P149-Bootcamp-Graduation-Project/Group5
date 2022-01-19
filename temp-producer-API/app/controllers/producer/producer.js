const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({
  groupId: "consumer_group_start",
});

let incomingMessage = "";
let is_producer_conn = false;
let is_consumer_conn = false;
const TEST_WITH_CONSUMER = false;

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
      req_path: "/air",
      err_func: "createProducer",
      content_err: error,
    };
  }
}

async function createConsumer() {
  try {
    if (!is_consumer_conn) {
      console.log("Consumer is  connecting...");
      await consumer.connect();
      console.log("Consumer connect successful!");
      await consumer.subscribe({
        topic: "Temperature-sensor",
        fromBeginning: true,
      });
      await consumer.run({
        eachMessage: async (result) => {
          incomingMessage = `msg -> ${result.message.value}, par -> ${result.partition}`;
          console.log(incomingMessage);
        },
      });
      is_consumer_conn = true;
    }
  } catch (error) {
    console.log("[ERROR] : ", error);
    const errData = {
      pwd: "./app/controllers/producer/producer.js",
      topic: "Temperature-sensor",
      req_path: "/air",
      err_func: "createConsumer",
      content_err: error,
    };
  }
}

createProducer();
if (TEST_WITH_CONSUMER) createConsumer();

const tempDataGet = async (req, res) => {
  await createProducer("-> ").then(async () => {
    if (TEST_WITH_CONSUMER) {
      await createConsumer().then(() => {
        res.send(JSON.stringify(incomingMessage));
      });
    }
  });
  res.end();
};

const tempDataPost = async (req, res) => {
  const obj = req.body;
  if (!obj) {
    console.log("400 -> Bad request");
  }
  console.log("Temp-Data -> ", obj);
  await createProducer(obj).then(async (data) => {
    if (TEST_WITH_CONSUMER) {
      await createConsumer().then(() => {
        res.send(JSON.stringify(incomingMessage));
      });
    }
  });
  res.end();
};

module.exports = {
  tempDataGet,
  tempDataPost,
};
