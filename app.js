const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    windSpeed: Number,
    humidity: Number,
});

const Weathers = mongoose.model('weathers', weatherSchema);

mongoose.connect('mongodb://admin:n010203@localhost/weatherDB?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let listWeather = [];

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to DB!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    Weathers.find({city: city}, (err, weathers) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(weathers.map(weather => {
            return {
                city: weather.city,
                temperature: weather.temperature,
                windSpeed: weather.windSpeed,
                humidity: weather.humidity,
            };
        }));
    });
});

/*app.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

});*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
