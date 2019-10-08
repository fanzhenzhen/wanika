let mongoose = require('mongoose');
let Schame = mongoose.Schema;
let citySchame = new Schame();
module.exports = mongoose.model('cities',citySchame);
