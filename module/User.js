const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    date : {
        type: date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;