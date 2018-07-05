const routermusoprofile = require('express').Router();
const models = require('../../models');
const Musos = models.Muso;

routermusoprofile.get('/muso-profile', (req, res) => {
    // res.send('muso profile')
    res.render('./muso/muso-profile.ejs', {title: 'Muso Profile'})
})

module.exports = routermusoprofile;