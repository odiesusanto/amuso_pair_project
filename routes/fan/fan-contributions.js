const routerfancontributions = require('express').Router();
const models = require('../../models')
const Fans = models.Fan;

routerfancontributions.get('/fan-contributions', (req, res) => {
    res.render('./fan/fan-contributions.ejs', {title: 'Contributions'})
})

routerfancontributions.post('/fan-contributions', function(req,res){
    Fans.create({
        FanId: req.body.FanId,
        ProjectId: req.body.ProjectId,
        contribution_amount: req.body.contribution_amount,
    })
    .then(() => {
        res.redirect('/fan-dashboard')

    })
    .catch((err) => {
        res.render('./fan/fan-contributions.ejs', {err: err.message, dataSubject: null})
    })
})

module.exports = routerfancontributions;

