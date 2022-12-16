const mongoose= require('mongoose');

const ScheduleTask = mongoose.model('ScheduleTask', {
    sId: Number,
    tId: Number,
    mId: Number
});

module.exports = ScheduleTask;