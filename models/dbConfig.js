const mongoose = require('mongoose');

const url = 'mongodb://admin:n010203@localhost/weatherDB?authSource=admin';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(url, options, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to MongoDB');
});