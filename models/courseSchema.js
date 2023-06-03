const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    credit: String,
    name: String,
    code: String,
    category: String,
    link: String,
});

module.exports = mongoose.model('Course', courseSchema);
