const koaRouter         = require('koa-router');
const router            = new koaRouter({prefix: '/api'});
const {IndexController} = require('./controller');

router.get('/', IndexController.IndexController);

module.exports = router;
