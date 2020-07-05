/**
 * https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
 * 
 */
const mongoose = require('mongoose');
// schemas allows to define table 
const OrdersSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true, lowercase: true, trim: true },
    creationDate: Date,
    paymentMode: String,
    printResult: String,
    printQuantity: Number
})


// les models permettent de creer des objects qui serviront à manipuler les tables bbl: 
const Orders = mongoose.model('orders', OrdersSchema);

module.exports = Orders;