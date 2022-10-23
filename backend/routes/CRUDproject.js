const express = require('express');
const router = express.Router();
const Project = require('../models/Project_Schema');

//REQUEST GET ALL PROJECTS
router.get('/', (req, res) => {
    Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW PROJECT
router.post('/add', (req, res) => {
    const newProject = new Project({
        projecttitle: req.body.projecttitle,
        projectauthor: req.body.projectauthor,
        projectdate: req.body.projectdate,
        projectcontent: req.body.projectcontent,
        projectsupervisor: req.body.projectsupervisor
    })
    newProject.save()
    .then(() => res.json("The new Project posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST FIND PROJECT BY ID
router.get('/:id', (req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//REQUEST UPDATE PROJECT
router.put('/update/:id', (req, res) => {
    Project.findById(req.params.id)
    .then(project => {
        project.projecttitle = req.body.projecttitle,
        project.projectauthor = req.body.projectauthor,
        project.projectdate = req.body.projectdate,
        project.projectcontent = req.body.projectcontent,
        project.projectsupervisor = req.body.projectsupervisor

        project.save()
        .then(() => res.json("The Project updated sucessfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE PROJECT
router.delete('/:id', (req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Project is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;