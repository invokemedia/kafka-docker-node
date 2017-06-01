const Kafka = require('no-kafka');

function startSending(p) {
  // unique messages
  let counter = 1;
  setInterval(() => {
    p.send({
        topic: process.env.KAFKA_TOPIC,
        partition: 0, // which partition to target - only 1 in this demo
        message: {
          value: 'Hello interval ' + counter // my message
        }
      })
      .then((result) => {
        counter++;
        console.log(result); // array of results
      });
  }, 1000);
}

const producer = new Kafka.Producer({
  connectionString: process.env.KAFKA_URL
});

producer.init()
  .then(() => {
    console.log('producer init success!');
    startSending(producer);
  });