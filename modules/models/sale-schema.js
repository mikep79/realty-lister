var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saleSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});

// first param = table/document name in lowercase
var saleProp = mongoose.model('salelistings', saleSchema);

module.exports = saleProp;