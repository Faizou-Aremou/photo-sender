const mongoose = require('mongoose');
const TransactionsSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, lowercase: true, trim: true },
    photoName: { type: String, required: true, lowercase: true, trim: true },
    creationDate: Date,
    format: String,
    nbPhoto: Number,
    unitPrice: Number,
    totalPrice: Number
})

// les models permettent de creer des objects qui serviront à manipuler les tables bbl: 
const Transactions = mongoose.model('transactions', TransactionsSchema);
module.exports = Transactions;