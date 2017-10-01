var router = require('express').Router();
var RentalProperties = require('../models/schema');

router.get('/', function(req, res){
    // find() on RentalProperties
    RentalProperties.find({"rent": {$exists: true}}, function(err, propResult) {
        if (err){
            console.log('Rent get error: ', err);
            res.sendStatus(500);
        } else {
            res.send(propResult);
        }
    });
});

router.post('/', function(req, res){
    console.log('req.body: ', req.body);
    var newListing = new RentalProperties(req.body);
    console.log('newlisting: ', newListing);
    newListing.save(function(err){
        if (err){
            console.log('newListing POST error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;