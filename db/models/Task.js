const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "'Name' property cannot be empty"],
        trim: true,
        maxLength: [100, "'Name' cannot be more than 100 characters"],
    },
    isDone: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task', TaskSchema);