const { Kafka } = require("kafkajs");

// createConsumer();
async function createConsumerAir() {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const consumer = kafka.consumer({
      groupId: "consumer_group_start",
    });
    console.log("Air-Consumer is connecting...");
    await consumer.connect();
    console.log("Connection is successfully...");
    await consumer.subscribe({
      topic: "Air-sensor",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Message: ${result.message.value}, Par=> ${result.partition}`
        );
      },
    });
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while read to message from air-sensor..."
    );
  }
}

//createConsumer();
async function createConsumerTemp() {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const consumer = kafka.consumer({
      groupId: "consumer_group_start",
    });
    console.log("Temperature-Consumer is connecting...");
    await consumer.connect();
    console.log("Connection is successfully...");
    await consumer.subscribe({
      topic: "Temperature-sensor",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Message: ${result.message.value}, Par=> ${result.partition}`
        );
      },
    });
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while read to message from temperature-sensor..."
    );
  }
}

// createConsumer();
async function createConsumerElectricity() {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const consumer = kafka.consumer({
      groupId: "consumer_group_start",
    });
    console.log("Electricity-Consumer is connecting...");
    await consumer.connect();
    console.log("Connection is successfully...");
    await consumer.subscribe({
      topic: "Electricity-sensor",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Message: ${result.message.value}, Par=> ${result.partition}`
        );
      },
    });
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while read to message from electricity-sensor..."
    );
  }
}

module.exports = {
  createConsumerAir,
  createConsumerTemp,
  createConsumerElectricity,
};
