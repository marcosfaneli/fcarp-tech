const mongoose = require('mongoose');
const config = require('../config/config');

const uri = config.db;

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log(`Connected to database`));

module.exports = mongoose;