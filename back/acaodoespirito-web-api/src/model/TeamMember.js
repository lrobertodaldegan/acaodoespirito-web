const mongoose= require('mongoose');

const TeamMember = mongoose.model('TeamMember', {
    id: Number,
    name: String
});

module.exports = TeamMember;