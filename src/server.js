const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const routes = require('./routes');
const config = require('./config/config');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(config.port, () => console.log(`App listening on port ${config.port}`));
