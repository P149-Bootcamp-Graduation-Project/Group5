const { Kafka } = require("kafkajs");
const converter =require("../../helper/timeConverter");
const temperatureLogger = require("../../models/temperatureLog");


const kafka = new Kafka({
  clientId: "kafka_start",
  brokers: ["192.168.1.2:9092"],
});

const consumer = kafka.consumer({
  groupId: "consumer_group_start",
});




async function createConsumerTemperature() {
  try {
   
    console.log("Temperature-sensor is connecting...");
    await consumer.connect();
    console.log("Connection is successfully...");
    await consumer.subscribe({
      topic: "Temperature-sensor",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({message}) => {
        
        // const {DATAAAAA}= JSON.parse(message.value.toString())
        //   const {id,sensor_data,time_stamp} = DATAAAAA;
        //   let date = await converter(time_stamp);
        //   console.log(sensor_data,date);
        
        console.log(message.value.toString());
        //await temperatureLogger();
      },
    });
  } catch (error) {
    console.log(
      "[ERROR] An error occurred while read to message from Temperature-sensor..."
    );

    const errData = {
      pwd: "./app/adapters/queue/consumerTemp.js",
      topic: "Temperature-sensor",
      err_func: "createConsumerTemperature",
      content_err: error,
    };
  }
}

module.exports =createConsumerTemperature;