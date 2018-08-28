require('dotenv').config();
const express = require('express')
    , axios = require('axios')
    , cors = require('cors')
    , app = express();

// body and config for Pocket post request    
const body = {
  "consumer_key": process.env.POCKET_CONSUMER_KEY,
  "access_token": process.env.POCKET_ACCESS_TOKEN
}
const config = {
  headers: {
    "Content-Type": "application/json"
  }
}

app.use(cors());

// can use http://www.google.com/s2/favicons?domain=www.domain.com
// to also send favicons for all links...
app.get('/api/readings', (req, res) => {
  axios.post('https://getpocket.com/v3/get', body, config)
       .then(readings => res.status(200).send(readings.data))
       .catch(err => res.status(500).send(err));
})

app.listen(process.env.SERVER_PORT, console.log(`Listening on SERVER_PORT... ${process.env.SERVER_PORT}`))