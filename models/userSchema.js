const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    gmail: String,
    password: String,
    role: String,
});

module.exports = mongoose.model('User', userSchema);
