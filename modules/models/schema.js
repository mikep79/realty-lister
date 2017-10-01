var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentSchema = new Schema({
    rent: Number,
    sqft: Number,
    city: String
});

var saleSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});

// first param = table/document name in lowercase
var rentProp = mongoose.model('listings', rentSchema);
// var saleProp = mongoose.model('listings', saleSchema);

module.exports = rentProp;

// export multipe functions and require with .rent or .sale.
// module.exports = {
//     rent: rentProp,
//     sale: saleProp
// };


// var users = mongoose.model('User', loginUserSchema, 'users');
// var registerUser = mongoose.model('Registered', registerUserSchema, 'users');
// This two schemas will save on the 'users' collection.