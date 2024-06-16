const taskModels = require('../models/taskModels');

const getAll = async (req, res) => {
    try {
        const tasks = await taskModels.getAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar as tarefas', error });
    }
};

const createTask = async (request, response) => {
    const createdTask = await taskModels.createTask(request.body);
    return response.status(201).json(createdTask);
};


const deleteTask = async (request, response) => {
    const { id } = request.params;
  
    await taskModels.deleteTask(id);
    return response.status(204).json();
  };

const uptadeTask = async (request, response) => {
    const { id } = request.params;
    await taskModels.uptadeTask(id, request.body);
    return response.status(204).json();

}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    uptadeTask
};
