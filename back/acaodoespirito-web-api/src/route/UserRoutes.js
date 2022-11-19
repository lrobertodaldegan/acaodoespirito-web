const express = require('express');
const router = express.Router();

const {
    getUserById,
    userLogin,
    registerUser
} = require('../controller/UserController');

const {checkToken} = require('../middleware/UserMiddleware');

router.post('/auth/register', registerUser);
router.post('/auth/login', userLogin);
router.get('/:id', checkToken, getUserById);

module.exports = router;