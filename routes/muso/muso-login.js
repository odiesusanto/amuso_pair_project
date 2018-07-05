const routermusologin = require('express').Router();
const models = require('../../models');
const Musos = models.Muso;
const bcrypt = require('bcrypt');


routermusologin.get('/muso-login', (req, res) => {
    res.render('./muso/muso-login.ejs', {title: 'Login for Muso'})
})

routermusologin.post('/muso-login', (req, res) => {
    Musos.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(muso => {
        if(muso) {
            let userPassword = bcrypt.compareSync(req.body.password, muso.password)

            if (userPassword) {
                req.session.musoId = muso.id;
                req.session.username = muso.username;
                req.session.name = muso.name;

                res.redirect('/muso/muso-dashboard');
            } else {
                res.render('./muso/muso-login', {title: 'Login for Muso', errors: [{ message: 'Username/password is incorrect!' }]});
            }
        } else {
            res.render('./muso/muso-login', {title: 'Login for Muso', errors: [{ message: 'Username/password is incorrect!' }]});
        }
    })
    .catch(({ errors }) => {
        res.render('./muso/muso-login', {title: 'Login for Muso', errors })
    })
})

module.exports = routermusologin;