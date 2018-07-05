const routerfanprofileedit = require('express').Router();
const models = require('../../models')
const Fans = models.Fan;

routerfanprofileedit.get('/fan-profile-edit/:id', (req, res) => {
    // Fans.update({})
  res.render('./fan/fan-profile-edit.ejs', {title: 'Profile'})
})

module.exports = routerfanprofileedit;
