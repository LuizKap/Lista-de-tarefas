let tasksList = []

const tasksModel = {

    getLists: () => tasksList,

    newTaskList: (title) => {

        tasksList.unshift({
            id: Math.floor(Math.random() * 100000).toString(),
            title: title,
            tasks: []
        })

        return tasksList
    },

    getOneList: (id) => {
        
        return tasksList.find(list => id.toString() === list.id.toString())
    },

    deleteTask: (id) => {
        tasksList = tasksList.filter(list => list.id !== id)

        return tasksList
    },

    newTask: (list_id, title) => {
        const list = tasksList.find(list => list.id === list_id)
        list.tasks.unshift({ id: Math.floor(Math.random() * 100000).toString(), title: title, completa: false })

    },

    checkTask: (list_id, task_id) => {

        const list = tasksList.find(list => list.id === list_id)
        list.tasks.forEach(task => {
            if (task.id === task_id) {
                task.completa = true
            }
        })
    }
}

module.exports = tasksModel