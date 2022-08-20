// require express
const express = require('express');
//require connection to database
const sequelize = require('./config/connection');

// use express
const app = express();
const PORT = process.env.PORT || 3001;

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});