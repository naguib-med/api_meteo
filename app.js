const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./models/dbConfig');
const getsRoutes = require('./routes/getsController');

app.use('/api', getsRoutes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

/*app.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

});*/

