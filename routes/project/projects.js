const routerproject = require('express').Router();
const models = require('../../models');
const Projects = models.Project;

routerproject.get('/projects', (req, res) => {
    // res.send('list projects go here')
    // Projects.findAll({

    // })
    res.render('./project/projects.ejs', {title: 'Projects in Progress to Target'})
})

module.exports = routerproject;