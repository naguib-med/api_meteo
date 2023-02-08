const express = require('express');
const router = express.Router();

const { Weathers } = require('../models/weatherSchema');

router.get('/weather/:city', (req, res) => {
    Weathers.findOne({'city': req.params.city}, (err, weather) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json({
            _id : weather._id,
            city: weather.city,
            coords: {
                lat: weather.coords.lat,
                lon: weather.coords.lon,
            },
            temperature: weather.temperature,
            windSpeed: weather.windSpeed,
            humidity: weather.humidity,
        });
    });
});

router.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    Weathers.findOne({'coords.lat': lat, 'coords.lon': lon}, (err, weather) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json({
            _id : weather._id,
            city: weather.city,
            coords: {
                lat: weather.coords.lat,
                lon: weather.coords.lon,
            },
            temperature: weather.temperature,
            windSpeed: weather.windSpeed,
            humidity: weather.humidity,
        });
    });

});

module.exports = router;