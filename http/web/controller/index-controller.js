const IndexController = {
    IndexController: function *(next) {
        try {
            const books = yield this.bookRepo.findAll();
            yield this.render('index', {books: books});
        } catch (error) {
            yield next;
        }
    },
    
    AddController: function *() {
        yield this.render('add');
    },
    
    SaveController: function *(next) {
        try {
            yield this.bookRepo.insert(this.request.body);
            this.response.redirect('/')
        } catch (error) {
            yield next;
        }
    },
    
    EditController: function *(next) {
        try {
            const book = yield this.bookRepo.findById(this.params['bookId']);
            yield this.render('edit', {book: book});
        } catch (error) {
            yield next;
        }
    },
    
    UpdateController: function *(next) {
        try {
            yield this.bookRepo.update(this.request.body);
            this.response.redirect('/');
        } catch (error) {
            yield next;
        }
    },
    
    DeleteController: function *(next) {
        try {
            yield this.bookRepo.remove(this.params['bookId']);
            this.response.redirect('/');
        } catch (error) {
            yield next;
        }
    }
};

module.exports = IndexController;
