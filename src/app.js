const express = require('express');
const morgan = require('morgan');
const { model } = require('mongoose');
const cors = require('cors');
const app = express();

require('./database.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api',require('./routes/indexRoutes'));

module.exports = app ;
