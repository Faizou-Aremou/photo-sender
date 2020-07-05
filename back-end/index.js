const express = require('express')
const MongooseManager = require('./db/mongoose/mongoose-manager');
const mongoose = require('./db/mongoose/mongoose');
const app = express()
app.listen(3000, () => {
    console.log('app is listenning in port 3000 ')
})

