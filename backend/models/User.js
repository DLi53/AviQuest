const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);