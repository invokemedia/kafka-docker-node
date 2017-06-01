const Kafka = require('no-kafka');

const consumer = new Kafka.SimpleConsumer({
  connectionString: process.env.KAFKA_URL
});

// data handler function can return a Promise
const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
  });
};

return consumer.init()
  .then(() => {
    // Subscribe to partiton 0 in the given topic:
    return consumer.subscribe(process.env.KAFKA_TOPIC, [0], dataHandler);
  });