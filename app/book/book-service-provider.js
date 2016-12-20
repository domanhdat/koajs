var BookRepository = require('./book-repository');

const BookServiceProvider = (app) => {
    app.context.bookRepo = new BookRepository(app.context.mongodb.collection('books'));
    return app;
};

module.exports = BookServiceProvider;
