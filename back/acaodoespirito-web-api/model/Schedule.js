const mongoose= require('mongoose');

const Schedule = mongoose.model('Schedule', {
    id: Number,
    day: Number,
    month: Number,
    year: Number,
    wDay: String
});

module.exports = Schedule;