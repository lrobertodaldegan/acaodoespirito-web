const mongoose= require('mongoose');

const ScheduleTask = mongoose.model('ScheduleTask', {
    sId: String,
    tId: String,
    mId: String
});

module.exports = ScheduleTask;