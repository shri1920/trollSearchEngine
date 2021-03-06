var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var user = new Schema({
    email: {type: String, required: true},
    verification: {type: String},
    username: {type: String},
    password: {type: String},
    date: {type: Date, default: Date.now},
    profile_img: String,
});

module.exports = mongoose.model('user', user);

