/**
 * mongo db manager
 * https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
 */
const Orders = require('../../models/order-model');
const Transactions = require('../../models/transaction-model');

class MongooseManager {

    /**
     * create collections of orders
     */
    createOrders(sessionId) {
        const params = { sessionId: sessionId };
        Orders.create(params, (err, order) => {
            if (err) winston.debug(`${JSON.stringify(err)}`);
            this.order = order;
        })
    }

    /**
     * create collections of transactions
     */
    createTransactions(sessionId, photoName) {
        const params = { sessionId: sessionId, photoName: photoName };
        Transactions.create(params, (err, transaction) => {
            if (err) winston.debug(`${JSON.stringify(err)}`);
            this.transaction = transaction;
        })
    }

    /**
     * saves document c-a-d equivalent of uplet 
     */
    save(collection) {
        collection.save((err) => {
            if (err) winston.debug(`${JSON.stringify(err)}`);
        })
    }
    /**
     * get transactions 
     */
    getTransactions(field, value) {
        Transactions.find({ [field]: value }, (err, transactions) => {
            if (err) winston.debug(`${JSON.stringify(err)}`);
            return transactions;
        })
    }
    /**
     * get order by sessionId
     */
    getOrders(field, value) {
        Orders.find({ [field]: value }, (err, orders) => {
            if (err) winston.debug(`${JSON.stringify(err)}`);
            return orders;
        })
    }
    /**
     * open database to recover data
     * insert transaction
     * insert order
     * get transaction
     * get order
     */
}

module.exports = MongooseManager;

