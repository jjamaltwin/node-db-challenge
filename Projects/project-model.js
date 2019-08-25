const db = require('../Data/dbConfig');




const find = () => {
    console.log("hello");
    return db('projects');
}

const getProjectTask = (projectId) => {
    return db('task')
    .where({ project_id: projectId })
    // .then(actions => {
    //     return actions;
    // });
}

const findById = (id) => {
    console.log("findById")
    return db('projects')
    .where({ id })
    .first()
    // .then(project => {
    //     if(project) {
    //         return getProjectTask(id).then(actions => {
    //             project.actions = actions;
    //             return project;
    //         })
    //     } else {
    //         return null;
    //     }
    // })

}

const addProject = (project) => {
    return db('projects').insert(project, 'id')
    .then(projects => {
        const projectID = projects[0];
        return projectID;
    })
}

const addTask = (task) => {
    return db('task')
            .insert(task, 'id')
            .then(task => {
                const taskID  = task[0];
                return taskID;
            })
        }




        module.exports = {
            find,
            findById,
            addProject,
            addTask,
            getProjectTask
        }
        