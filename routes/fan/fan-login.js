const routerfanlogin = require('express').Router();
const models = require('../../models');
const Fans = models.Fan;
const bcrypt = require('bcrypt');


routerfanlogin.get('/fan-login', (req, res) => {
    res.render('./fan/fan-login.ejs', {title: 'Login for Fan'})
})

routerfanlogin.post('/fan-login', (req, res) => {
    Fans.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(fan => {
        if(fan) {
            let userPassword = bcrypt.compareSync(req.body.password, fan.password)

            if (userPassword) {
                req.session.fanId = fan.id;
                req.session.email = fan.email;
                req.session.name = fan.name;

                res.redirect('/fan/fan-dashboard');
            } else {
                res.render('./fan/fan-login', {title: 'Login for Fan', errors: [{ message: 'Username/password is incorrect!' }]});
            }
        } else {
            res.render('./fan/fan-login', {title: 'Login for Fan', errors: [{ message: 'Username/password is incorrect!' }]});
        }
    })
    .catch(({ errors }) => {
        res.render('./fan/fan-login', {title: 'Login for Fan', errors })
    })
})

module.exports = routerfanlogin;