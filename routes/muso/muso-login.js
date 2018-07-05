const routermusologin = require('express').Router();
const models = require('../../models');
const Musos = models.Muso;
const bcrypt = require('bcrypt');


routermusologin.get('/muso-login', (req, res) => {
    res.render('./muso/muso-login.ejs', {title: 'Login for Muso'})
})

routermusologin.post('/muso-login', (req, res) => {
    Musos.findOne({
        username: req.body.username 
    })
    .then(muso => {
        if(muso) {
            const userPassword = bcrypt.compareSync(req.body.password, muso.password)
            console.log(userPassword);
            if (userPassword) {
                req.session.musoId = muso.id;
                req.session.username = muso.username;
                req.session.name = muso.name;
                res.redirect('/muso-dashboard');
            } else {
                res.render('./muso/muso-login');
            }
        } else {
            res.render('./muso/muso-login');
        }
    })
    .catch(({ errors }) => {
        res.render('./muso/muso-login', {})
    })
})

module.exports = routermusologin;