const axios = require('axios')
    , functions = require('firebase-functions');


// Pocket API credentials
const body = {
  "consumer_key": functions.config().readings.consumer_key,
  "access_token": functions.config().readings.access_token
};
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

exports.readings = functions.https.onRequest((req, res) => {
  axios.post('https://getpocket.com/v3/get', body, config)
       .then(readings => res.status(200).send(readings.data))
       .catch(err => res.status(500).send(err));
});
