const routerfanregister = require('express').Router();
const models = require('../../models')
const Fans = models.Fan;

routerfanregister.get('/fan-register', (req, res) => {
    res.render('./fan/fan-register.ejs', {title: 'Registration'})
})

routerfanregister.post('/fan-register', function(req,res){
    Fans.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        genre: req.body.genre
    })
    .then(() => {
        res.redirect('./fan/fan-dashboard')

    })
    .catch((err) => {
        // console.log(err)
        res.render('./fan/fan-register.ejs', {err: err.message})
    })
})

module.exports = routerfanregister;

