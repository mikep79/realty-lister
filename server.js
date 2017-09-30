var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var rent = require('./modules/routes/rent');

app.listen(3000, function(){
    console.log('Listening at port 3000');
});

// middleware
app.use(express.static('public'));

app.use('/', index);
app.use('/getRent', rent);