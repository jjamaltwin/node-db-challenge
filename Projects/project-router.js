const express = require('express');
const router = express.Router();
const projects = require('./project-model');



router.get('/', (req, res) => {
    projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    projects.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    const newProject = req.body;

    projects.addProject(newProject)
    .then(project => {
        res.status(201).json({success: true, project})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/:id/task', (req, res) => {
    const task = {
        project_id: req.params.id,
        ...req.body
    }
    projects.addTask(task)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})

router.get('/:id/task', (req, res) => {
    const { id } = req.params;
    projects.getProjectTask(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })

})


router.post('/:id/resource', (req, res) => {
    const tresource = {
        project_id: req.params.id,
        ...req.body
    }
    projects.addTResource(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            res.status(500).json(error)
        })

})



module.exports = router;