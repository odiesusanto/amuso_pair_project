const routermusos = require('express').Router();
const models = require('../../models');
const Musos = models.Muso;

routermusos.get('/musos', (req, res) => {
    // res.send('musos: someone obsessed with music')
    // Projects.findAll({

    // })
    res.render('./muso/musos.ejs', {title: 'List of Musos'})
})

module.exports = routermusos;