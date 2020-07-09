"use strict";
const express = require('express')
const winston = require('./config/winston');
const morgan = require('morgan');
const MongooseManager = require('./db/mongoose/mongoose-manager');
const mongoose = require('./db/mongoose/mongoose');
const app = express()
app.use(morgan('combined', { stream: winston.stream }));
app.listen(3000, () => {
    console.log('app is listenning in port 3000 ')
})

