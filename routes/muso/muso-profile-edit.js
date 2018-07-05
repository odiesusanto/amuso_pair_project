const routermusoprofileedit = require('express').Router()
const models = require('../../models');
const Musos = models.Muso;

routermusoprofileedit.get('/muso-profile-edit/:id', (req, res) => {
    // res.send('this is for editing muso profile')
    Musos.findById(req.params.id)
    .then(editFan => {
        res.render('./muso/muso-profile-edit.ejs', {
            title: 'Profile', editFan: editFan
        })
    })
    .catch(err => {
        res.send({error: err.message})
    })
})

routermusoprofileedit.post('/muso-profile-edit/:id', (req, res) => {
    Musos.update({
        id: req.params.id,
        name: req.body.name,
        genre: req.body.genre
    }, {
        where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/muso/muso-profile')
    })
    .catch(err => {
        res.send(err)
    })
})



module.exports = routermusoprofileedit;