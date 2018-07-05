const routercreateproject = require('express').Router();
const models = require('../../models')
const Projects = models.Project;


routercreateproject.get('/create-project', (req, res) => {
    res.render('./project/create-project.ejs')
})

routercreateproject.post('/create-project', function(req,res){
    Projects.create({
        name: req.body.name,
        MusoId: req.params.id,
        target: req.body.target,
        min_amount: req.body.min_amount,
    }, {
        where: {id: req.params.id}
})
    .then(() => {
        res.redirect('/muso/muso-dashboard')

    })
    .catch((err) => {
        res.render('./project/create-projects.ejs', {err: err.message, dataSubject: null })
    })
})

module.exports = routercreateproject;
