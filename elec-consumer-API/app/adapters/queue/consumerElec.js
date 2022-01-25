const { Kafka } = require("kafkajs");
const converter = require("../../middleware/timeConverter");
const electricityLogger = require("../../models/electricityLog");
const errorHandler = require("../../controllers/error/error");

const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const consumer = kafka.consumer({
  groupId: "consumer_group_start",
});

async function createConsumerElectricity() {
  try {
    console.log("Electricity-Consumer is connecting...");
    await consumer.connect();
    console.log("Connection is successfully...");
    await consumer.subscribe({
      topic: "Electricity-sensor",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { id, sensor_data, time_stamp } = JSON.parse(
          message.value.toString()
        );
        let read_at = await converter(time_stamp);

        await electricityLogger(1, 1, id, sensor_data, read_at);
        console.log(JSON.parse(message.value.toString()));
      },
    });
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while read to message from electricity-sensor..."
    );
    const errData = {
      pwd: "./app/adapters/queue/consumerElec.js",
      topic: "Electricity-sensor",
      err_func: "createConsumerElectricity",
      content_err: error,
      created_at: converter(Date.now())
    };
    errorHandler(errData);
  }
}

module.exports = createConsumerElectricity;
