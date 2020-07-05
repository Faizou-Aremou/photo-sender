/**
 * comporte toute la logique de creation de base de données mongo DB
 * bibliographie: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
 * https://atinux.developpez.com/tutoriels/javascript/mongodb-nodejs-mongoose/
 * https://books.google.fr/books?id=pSoTBQAAQBAJ&pg=PA476&lpg=PA476&dq=comment+indiquer+dans+mongodb+sch%C3%A9mas+qu%27un+champ+est+un+cl%C3%A9&source=bl&ots=sOKz4-wtGd&sig=ACfU3U1DYS7Ws91yWRiD_or13N7CZMTe5Q&hl=fr&sa=X&ved=2ahUKEwiJjd3I4bHqAhWixYUKHQ9JAVAQ6AEwAHoECAoQAQ#v=onepage&q=comment%20indiquer%20dans%20mongodb%20sch%C3%A9mas%20qu'un%20champ%20est%20un%20cl%C3%A9&f=false
 * https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
 */
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/photo_sender_db';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    console.log('db is connected');
}); // returns connection

//Get the default connection
const db = mongoose.connection; // recover connection


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));