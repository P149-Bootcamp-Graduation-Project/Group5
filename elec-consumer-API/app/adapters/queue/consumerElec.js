const { Kafka } = require("kafkajs");
const converter = require("../../helper/timeConverter");
const electricityLogger = require("../../models/electricityLog");

const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const consumer = kafka.consumer({
  groupId: "consumer_group_start"
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
      eachMessage: async ({message}) => {
        
        // const {DATAAAAA}= JSON.parse(message.value.toString())
        //   const {id,sensor_data,time_stamp} = DATAAAAA;
        //   let date = await converter(time_stamp);
        //   console.log(sensor_data,date);

        console.log(message.value.toString());
        //await electricityLogger()
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
    };
  }
}

module.exports =createConsumerElectricity;
