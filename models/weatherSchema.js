const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    coords: {
        lat: Number,
        lon: Number,
    },
    city: String,
    temperature: Number,
    windSpeed: Number,
    humidity: Number,
});

const Weathers = mongoose.model('Weathers', weatherSchema, 'weathers');

module.exports = { Weathers };