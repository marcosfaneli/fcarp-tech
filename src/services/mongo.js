const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.db, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('Connected to database ' + config.db));

module.exports = mongoose;