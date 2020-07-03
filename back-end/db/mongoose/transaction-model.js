const mongoose = require ('./mongoose');
const transactionsSchema = new mongoose.Schema({
    sessionId: { type: string, required: true, lowercase: true, trim: true },
    photoName: { type: string, required: true, lowercase: true, trim: true },
    creationDate: Date,
    format: string,
    nbPhoto: number,
    unitPrice: number,
    totalPrice: number
})
// les models permettent de creer des objects qui serviront à manipuler les tables bbl: 
const Transactions = mongoose.model('transactions', transactionsSchema);
exports.module = Transactions;