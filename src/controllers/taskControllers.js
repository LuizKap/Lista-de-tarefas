const tasksModel = require("../models/taskModels")


const taskController = {

    index: (req, res) => {

        res.render('index')
    },

    renderNewList: (req, res) => {

        res.render('newList')
    },

    showAll: (req, res) => {

        const taskLists = tasksModel.getLists()

        res.render('allTasks', { taskLists })
    },

    createNewList: (req, res) => {
        const { listName } = req.body
        const newLists = tasksModel.newTaskList(listName)
        const newList = newLists[0]
        res.redirect(`/tasksFromList/${newList.id}`)
    },

    deleteTask: (req, res) => {
        const id = req.params.id
        tasksModel.deleteTask(id)

        res.redirect('/allTasks')
    },

    renderList: (req, res) => {
        const id = req.params.id

        const list = tasksModel.getOneList(id)
        
        res.render('tasksFromList', { list })
    },

    createNewTask: (req, res) => {
        const list_id = req.params.id
        const { taskTitle } = req.body
        tasksModel.newTask(list_id, taskTitle)

        res.redirect(`/tasksFromList/${list_id}`)
    },

    checkTask: (req, res) => {
        const task_id = req.params.id
        const { listId } = req.body

        tasksModel.checkTask(listId, task_id)

        res.redirect(`/tasksFromList/${listId}`)
    }
}

module.exports = taskController