/**
 * mongo db manager
 * https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
 */
const Orders = require('./order-model');
const Transactions = require('./transaction-model');
class mongooseManager {

    constructor() { }
    /**
     * create collections of orders
     */
    createOrders({ sessionId: sessionId }) {
        Orders.create({ sessionId: sessionId }, (err, order) => {
            if (err) console.log(err);
            this.order = order;
        })
    }

    /**
     * create collections of transactions
     */
    createTransactions({ sessionId: sessionId, photoName: photoName }) {
        Transactions.create({ sessionId: sessionId, photoName: photoName }, (err, transaction) => {
            if (err) console.log(err);
            this.transaction = transaction;
        })
    }

    /**
     * saves document  c-a-d equivalent of uplet 
     */
    saveOrder(collection) {
        collection.save((err) => {
            if (err) console.log(error);
        })
    }
}

