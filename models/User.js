const mongoose = require('mongoose');
// User Schema
const UserSchema = mongoose.Schema({
	studentId : {
        type: Number,
        required: true
    },
    firstname : {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
