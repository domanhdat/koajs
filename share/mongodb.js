const Promise     = require('bluebird');
const MongoClient = require('mongodb').MongoClient;

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017/book', (err, mongodb) => {
            if (err) {
                return reject(err);
            }
            app.context.mongodb = mongodb;
            return resolve(app);
        })
    })
};
