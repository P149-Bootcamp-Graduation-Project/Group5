const { Kafka } = require("kafkajs");

createTopic();
async function createTopic() {
  try {
    // create kafka broker variable
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    // create kafka broker admin
    const admin = kafka.admin();
    console.log("Broker is connecting...");

    // admin connection to kafka
    await admin.connect();
    console.log("Connection is successfully...");

    // create topics and partitions
    await admin.createTopics({
      topics: [
        {
          topic: "Temperature-sensor",
          numPartitions: 1,
        },
        {
          topic: "Air-sensor",
          numPartitions: 1,
        },
        {
          topic: "Electricity-sensor",
          numPartitions: 1,
        },
      ],
    });
    console.log("Topic created successfully...");
    await admin.disconnect();
  } catch (error) {
    console.log("[ERROR] An error occurred while creating the topic...\n");
    console.log(error);
  } finally {
    process.exit(0);
  }
}

module.exports = {
  createTopic,
};
