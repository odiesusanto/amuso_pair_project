const routermusoregister = require('express').Router();
const models = require('../../models')
const Musos = models.Muso;

routermusoregister.get('/muso-register', (req, res) => {
    res.render('./muso/muso-register.ejs')
})

routermusoregister.post('/muso-register', function(req,res){
    Musos.create({
        name: req.body.name,
        genre: req.body.genre,
        established_year: req.body.established_year,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    .then(() => {
        res.redirect('/muso/muso-dashboard')
    })
    .catch((err) => {
        // console.log(err)
        res.render('./muso/muso-register.ejs',{err: err.message})
    })
})

module.exports = routermusoregister;




