const app                    = require('koa')();
const {routerApi, routerWeb} = require('./http');
const bodyParser             = require('koa-bodyparser');

app.use(bodyParser());
app.use(routerApi.routes());
app.use(routerWeb.routes());

app.on('error', err => console.error('server error', err));

module.exports = app;
