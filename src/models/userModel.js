const mongoose = require('../database.js');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String,

        unique: true
    },
    birthdate: {
        type: String
    },
    gender: {
        type: String
    }
})
const userModel = mongoose.model('users',userSchema);
module.exports = userModel;
