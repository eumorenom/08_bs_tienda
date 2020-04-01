
var mongoose = require('mongoose');
var Tienda_Super = mongoose.connect('mongodb://localhost/Tienda_Super');
module.exports = Tienda_Super;