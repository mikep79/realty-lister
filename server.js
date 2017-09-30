var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./modules/routes/index');
var rent = require('./modules/routes/rent');
var sale = require('./modules/routes/sale');

app.listen(3000, function(){
    console.log('Listening at port 3000');
});

// middleware
//connect to mongo DB. Why 27017?
mongoose.connect('mongodb://localhost:27017/realestate');
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', index);
app.use('/getRent', rent);
app.use('/getSale', sale);