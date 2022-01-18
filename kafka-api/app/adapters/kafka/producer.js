const { Kafka } = require("kafkajs");

//createProducer();
async function createProducerAir(data) {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const producer = kafka.producer();
    console.log("Air-Producer is connecting...");
    await producer.connect();
    console.log("Connection is successfully...");
    const message_result = await producer.send({
      topic: "Air-sensor",
      messages: [
        {
          value: JSON.stringify(data),
          partition: 0,
        },
      ],
    });
    console.log(
      "Sending is successful:\nMessage:",
      JSON.stringify(message_result)
    );
    await producer.disconnect();
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while send to message from air-sensor..."
    );
  } finally {
    process.exit(0);
  }
}

async function createProducerElectricity(data) {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const producer = kafka.producer();
    console.log("Electricity-Producer is connecting...");
    await producer.connect();
    console.log("Connection is successfully...");
    const message_result = await producer.send({
      topic: "Electricity-sensor",
      messages: [
        {
          value: JSON.stringify(data),
          partition: 0,
        },
      ],
    });
    console.log(
      "Sending is successful:\nMessage:",
      JSON.stringify(message_result)
    );
    await producer.disconnect();
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while send to message from electricity-sensor..."
    );
  } finally {
    process.exit(0);
  }
}

async function createProducerTemp(data) {
  try {
    const kafka = new Kafka({
      clientID: "kafka_start",
      brokers: ["192.168.1.2:9092"],
    });

    const producer = kafka.producer();
    console.log("Temperature-Producer is connecting...");
    await producer.connect();
    console.log("Connection is successfully...");
    const message_result = await producer.send({
      topic: "Temperature-sensor",
      messages: [
        {
          value: JSON.stringify(data),
          partition: 0,
        },
      ],
    });
    console.log(
      "Sending is successful:\nMessage:",
      JSON.stringify(message_result)
    );
    await producer.disconnect();
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while send to message from temperature-sensor..."
    );
  } finally {
    process.exit(0);
  }
}

module.exports = {
  createProducerAir,
  createProducerTemp,
  createProducerElectricity,
};
