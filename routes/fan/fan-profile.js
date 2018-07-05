const routerfanprofile = require('express').Router();
const models = require('../../models');
const Fans = models.Fan;

routerfanprofile.get('/fan-profile/:id', (req, res) => {
    // res.send('fan profile')
    res.render('./fan/fan-profile.ejs', {title: 'Profile'})
})

module.exports = routerfanprofile;