const mongoose= require('mongoose');

const Task = mongoose.model('Task', {
    id: Number,
    name: String
});

module.exports = Task;