var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentSchema = new Schema({
    rent: Number,
    sqft: Number,
    city: String
});

// first param = table/document name in lowercase
var rentProp = mongoose.model('listings', rentSchema);

module.exports = rentProp;

