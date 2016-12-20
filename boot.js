const Promise             = require('bluebird');
const mongodb             = require('./share/mongodb');
const bookServiceProvider = require('./app/book/book-service-provider');
const nunjuck             = require('./share/nunjuck');

const boot = (app) => {
    return Promise.resolve(app)
        .then(mongodb)
        .then(nunjuck)
        .then(bookServiceProvider)
        .catch(error => console.log(error));
};

module.exports = boot;