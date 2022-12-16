
const TeamMember = require('../../model/TeamMember');
const Task = require('../../model/Task');
const ScheduleTask = require('../../model/ScheduleTask');
const Schedule = require('../../model/Schedule');

const MSG_ERRO_PADRAO = 'Houve um erro ao tentar realizar operação. Tente novamente mais tarde!';
const MSG_SUCESSO_PADRAO = 'Operação realizada com sucesso!';

const getAllMembers = async () => {
    try{
        let itens = await TeamMember.find({});
        
        res.status(200).json({msg: MSG_SUCESSO_PADRAO, members: itens});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addMembers = (req, res) => {
    let membrosCriados = [];

    let ms = req.body;

    if(ms && ms.length > 0){
        ms.forEach(async m => {
            let tm = new TeamMember({id: m.id, name: m.name});

            try{
                await tm.save();

                membrosCriados.push(m);
            } catch(err) {
                console.error(err);
            }
        });
    }

    if(membrosCriados.length > 0)
        res.status(201).json({msg: MSG_SUCESSO_PADRAO, members: membrosCriados});
    else
        res.status(500).json({msg: MSG_ERRO_PADRAO});
}

const delMembers = (req, res) => {}

const getAllTasks = async (req, res) => {
    try{
        let itens = await Task.find({});

        res.status(200).json({msg: MSG_SUCESSO_PADRAO, tasks: itens});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addTasks = (req, res) => {
    let tasksCriadas = [];

    let ts = req.body;

    if(ts && ts.length > 0){
        ts.forEach(async t => {
            let task = new Task({id: t.id, name: t.name});

            try{
                await task.save();

                tasksCriadas.push(t);
            } catch(err) {
                console.error(err);
            }
        });
    }

    if(tasksCriadas.length > 0)
        res.status(201).json({msg: 'Tasks criadas com sucesso!', tasks: tasksCriadas});
    else
        res.status(500).json({msg: 'Não foi possível criar Tasks!'});
}

const delTasks = (req, res) => {}

const getAllSchedules = async (req, res) => {
    try{
        let schedules = await Schedule.find({});

        schedules.forEach(schd => schd.tasks = ScheduleTask.find({sId: schd.id}));

        res.status(200).json({msg: 'Consulta realizada com sucesso!', schedules: schedules});
    }catch(e){
        res.status(500).json({msg: MSG_ERRO_PADRAO});
    }
}

const addSchedules = (req, res) => {}

const addScheduleTasks = (req, res) => {}

const delSchedule = async (req, res) => {}

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
    delSchedule 
}