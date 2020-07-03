
const mongoose = require ('./mongoose');

// schemas allows to define table 
const ordersSchema = new mongoose.Schema({
    sessionId: { type: string, required: true, unique: true, lowercase: true, trim: true },
    creationDate: Date,
    paymentMode: string,
    printResult: string,
    printQuantity: number
})
// les models permettent de creer des objects qui serviront à manipuler les tables bbl: 
const Orders = mongoose.model('orders', ordersSchema);

exports.module = Orders;