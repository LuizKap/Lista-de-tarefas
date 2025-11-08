const express = require('express')
const taskController = require('./controllers/taskControllers')


const router = express.Router()

router.get('/', taskController.index)
router.get('/allTasks', taskController.showAll)
router.get('/newList', taskController.renderNewList)
router.post('/admin/createList', taskController.createNewList)
router.get('/tasksFromList/:id', taskController.renderList)
router.post('/admin/deleteTask/:id', taskController.deleteTask)
router.post('/admin/createNewTask/:id', taskController.createNewTask)
router.post('/checkTask/:id', taskController.checkTask)


module.exports = router