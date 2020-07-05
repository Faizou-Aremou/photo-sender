/**
 * mongo db manager
 * https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
 */
const Orders = require('./order-model');
const Transactions = require('./transaction-model');
class MongooseManager {

    /**
     * create collections of orders
     */
    createOrders(sessionId) {
        const params = { sessionId: sessionId };
        Orders.create(params, (err, order) => {
            if (err) console.log(err);
            this.order = order;
        })
    }

    /**
     * create collections of transactions
     */
    createTransactions(sessionId, photoName) {
        const params = { sessionId: sessionId, photoName: photoName };
        Transactions.create(params, (err, transaction) => {
            if (err) console.log(err);
            this.transaction = transaction;
        })
    }

    /**
     * saves document  c-a-d equivalent of uplet 
     */
    save(collection) {
        collection.save((err) => {
            if (err) console.log(error);
        })
    }
    /**
     * get transaction
     * @param photoname 
     */
    getTransaction(photoName) {
        Transactions.find({ photoName: photoName }, (err, transaction) => {
            if (err) console.log(err);

            return transaction;
        })
    }
    /**
     * get order
     */

    getOrder(sessionId) {
        Orders.find({ sessionId: sessionId }, (err, order) => {
            if (err) console.log(err)
            return order;
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

