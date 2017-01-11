var mongoose = require('mongoose');

module.exports = mongoose.model('Message',{
    msg: String
});