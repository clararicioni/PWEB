let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.set('views','./app/views');
module.exports = app;