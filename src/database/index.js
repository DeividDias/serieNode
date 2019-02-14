const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/noderest', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;