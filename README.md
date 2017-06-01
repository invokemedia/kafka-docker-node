Kafka Demo Using Docker & Node.js
=================================

> Run a containerized Kafka server and interact with it using Node.js

### Setup

* Open `docker-compose.yml` and make sure `KAFKA_ADVERTISED_HOST_NAME` is the same as `docker-compose ip`.
* Open `package.json` and make sure the IP in the `KAFKA_URL` is the same as `docker-compose ip`.
* Make sure `KAFKA_CREATE_TOPICS` in `docker-compose.yml` contains the same topic name as `KAFKA_TOPIC` in the `package.json`.

### Running

* run `npm install`
* run `docker-compose up`
* open a new terminal tab and run `npm start consumer`
* open a new terminal tab and run `npm start producer`

You can now see the producer tab making new messages and the consumer tab reading those messages. You can start more producers (while still running 1 consumer) and see more messages coming in.

### Topic Errors

If you are getting an error about the topic not existing, try running `docker-compose rm` to delete the containers. Then re-run `docker-compose up` again.
