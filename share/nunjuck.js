const koaNunjucks = require('koa-nunjucks-2');
const path        = require('path');

module.exports = (app) => {
    app.context.render = koaNunjucks({
        ext           : 'html',
        path          : path.join(__dirname, './../public'),
        nunjucksConfig: {autoescape: true}
    });
    return app;
};
