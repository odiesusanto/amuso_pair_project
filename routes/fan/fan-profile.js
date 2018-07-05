const routerfanprofile = require('express').Router();
const models = require('../../models')
const Fans = models.Fan;

routerfanprofile.get('/fan-profile', (req, res) => {
    // Fans.update({})
  res.render('./fan/fan-profile.ejs', {title: 'Profile'})
})

module.exports = routerfanprofile;
