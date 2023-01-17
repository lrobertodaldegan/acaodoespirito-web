
const TeamMember = require('../model/TeamMember');
const Task = require('../model/Task');
const ScheduleTask = require('../model/ScheduleTask');
const Schedule = require('../model/Schedule');

const MSG_ERRO_PADRAO = 'Houve um erro ao tentar realizar operação. Tente novamente mais tarde!';
const MSG_SUCESSO_PADRAO = 'Operação realizada com sucesso!';

const getAllMembers = async (req, res) => {
    try{
        let itens = await TeamMember.find({});
        
        res.status(200).json({msg: MSG_SUCESSO_PADRAO, members: itens});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addMembers = (req, res) => {
    try{
        let ms = req.body;

        if(ms && ms.length > 0){
            ms.forEach(async m => {
                let qtdExists = await TeamMember.countDocuments({name:m.name});

                if(qtdExists <= 0){
                    let tm = new TeamMember({name: m.name});
                    
                    await tm.save();
                }
            });
        }

        res.status(201).json({msg: MSG_SUCESSO_PADRAO});
    }catch(err){
        console.log(err);
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const delMembers = async (req, res) => {
    try{
        let members = req.body;

        if(members && members.length > 0)
            members.forEach(async m => await TeamMember.deleteOne({name: m.name}));

        res.status(200).json({msg: 'Operação realizada com sucesso!'});
    }catch(e){
        console.log(e);
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const getAllTasks = async (req, res) => {
    try{
        let itens = await Task.find({});

        res.status(200).json({msg: MSG_SUCESSO_PADRAO, tasks: itens});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addTasks = (req, res) => {
    try{
        let ts = req.body;

        if(ts && ts.length > 0){
            ts.forEach(async t => {
                let task = new Task({name: t.name});

                await task.save();
            });
        }

        res.status(201).json({msg: 'Tasks criadas com sucesso!'});
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'Não foi possível criar Tasks!'});
    }
}

const delTasks = (req, res) => {
    try{
        let tasksId = req.body;

        if(tasksId && tasksId.length > 0)
            tasksId.forEach(async t => await Task.deleteOne({name: t.name}));

        res.status(200).json({msg: 'Operação realizada com sucesso!'});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const getAllSchedules = async (req, res) => {
    try{
        let schedules = await Schedule.find({});

        let results = [];

        for(const schd of schedules) {
            let s = {...schd._doc};

            s.tasks = await ScheduleTask.find({sId: schd.id});

            results.push(s);
        }

        res.status(200).json({msg: 'Consulta realizada com sucesso!', schedules: results});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addSchedules = (req, res) => {
    try{
        let ss = req.body;

        if(ss && ss.length > 0){
            ss.forEach(async s => {
                let schedule = new Schedule({day: s.day, month: s.month, year: s.year, wDay: s.wDay});

                await schedule.save();
            });
        }

        res.status(201).json({msg: 'Agenda registrada com sucesso!'});
    }catch(err){
        console.log(err);
        res.status(500).json({msg: 'Não foi possível criar Agenda!'});
    }
}

const addScheduleTasks = (req, res) => {
    try{
        let ts = req.body;

        if(ts && ts.length > 0){
            ts.forEach(async t => {
                let sTask = new ScheduleTask({sId: t.sId, tId: t.tId, mId: t.mId});

                await sTask.save();
            });
        }

        res.status(201).json({msg: 'Escalas registradas com sucesso!'});
    }catch(err){
        console.log(err);
        res.status(500).json({msg: 'Não foi possível criar as Escalas!'});
    }
}

const delScheduleTasks = (req, res) => {
    try{
        let tasks = req.body;

        if(tasks && tasks.length > 0)
            tasks.forEach(async t => await ScheduleTask.deleteOne({id: t.id}));

        res.status(200).json({msg: 'Operação realizada com sucesso!'});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const delSchedule = async (req, res) => {
    try{
        let scheduleId = req.query.scheduleId;

        await ScheduleTask.deleteMany({sId: scheduleId});

        await Schedule.deleteOne({id: scheduleId});

        res.status(200).json({msg: 'Operação realizada com sucesso!'});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

module.exports = {
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
}