const axios = require('axios')
    , functions = require('firebase-functions');

const body = {
  "consumer_key": process.env.POCKET_CONSUMER_KEY,
  "access_token": process.env.POCKET_ACCESS_TOKEN
};
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

// app.use(cors({ origin: true }));
// app.get('/api/readings', (req, res) => {

// });

exports.readings = functions.https.onRequest((req, res) => {
  axios.post('https://getpocket.com/v3/get', body, config)
       .then(readings => res.status(200).send(readings.data))
       .catch(err => res.status(500).send(err));
});
