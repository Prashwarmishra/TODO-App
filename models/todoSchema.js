const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    }

});
const ToDo = mongoose.model('Contact', todoSchema);

module.exports = ToDo;
