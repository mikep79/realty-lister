var router = require('express').Router();
var RentalProperties = require('../models/schema');

router.get('/', function(req, res){
    // find() on RentalProperties
    RentalProperties.find({}, function(err, propResult) {
        if (err){
            console.log('Rent get error: ', err);
            res.sendStatus(500);
        } else {
            res.send(propResult);
        }
    });
});

module.exports = router;