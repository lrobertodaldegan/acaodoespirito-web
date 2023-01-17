const mongoose= require('mongoose');

const SuperUser = mongoose.model('SuperUser', {
    username: String
});

module.exports = SuperUser;