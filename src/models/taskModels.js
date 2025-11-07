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
    console.log('Criando nova tarefa na lista:', list_id)

    const list = tasksList.find(list => list.id === list_id)

    if (!list) {
        console.error(`Lista com ID ${list_id} não encontrada dentro do model.`)
        console.log('Todas as listas atuais:', tasksList)
        return
    }

    list.tasks.unshift({
        id: Math.floor(Math.random() * 100000).toString(),
        title: title,
        completa: false
    })

    console.log('Nova tarefa criada:', title)
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