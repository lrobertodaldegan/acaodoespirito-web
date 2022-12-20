const express = require('express');
const router = express.Router();

const {
    getAllMembers,
    addMembers,
    delMembers,
    getAllTasks,
    addTasks,
    delTasks,
    getAllSchedules,
    addSchedules,
    addScheduleTasks,
    delSchedule,
    delScheduleTasks 
} = require('../controller/TeamController');

const {checkToken} = require('../middleware/UserMiddleware');
//routes
//team members
router.get('/members', checkToken, getAllMembers);
router.post('/members', checkToken, addMembers);
router.delete('/members', checkToken, delMembers);
//tasks
router.get('/tasks', checkToken, getAllTasks);
router.post('/tasks', checkToken, addTasks);
router.delete('/tasks', checkToken, delTasks);
//schedules
router.get('/schedules', checkToken, getAllSchedules);
router.post('/schedules', checkToken, addSchedules);
router.delete('/schedule', checkToken, delSchedule);
router.post('/schedule/tasks', checkToken, addScheduleTasks);
router.delete('/schedule/tasks', checkToken, delScheduleTasks);

module.exports = router;