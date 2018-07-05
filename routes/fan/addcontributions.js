const routeraddcontributions = require('express').Router();
const models = require('../../models')
const Fans = models.Fan;

routeraddcontributions.get('/addcontributions', (req, res) => {
    // res.send('this is to add contributions')
    res.render('./fan/addcontributions', {title: 'Add Contributions'})
})

module.exports = routeraddcontributions;

