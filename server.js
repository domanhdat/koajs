let app  = require('./app');
const boot = require('./boot');

boot(app);

app.listen(3000);
