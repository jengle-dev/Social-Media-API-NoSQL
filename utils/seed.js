const connection = require('../config/connection');
//require models
//require data

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');


});