const routerhomepage = require('express').Router();

routerhomepage.get('/', (req, res) => {
    // res.send('hiiii there!')
    res.render('homepage.ejs', {title: 'Welcome to Amuso', paragraph: 'Make your wants a reality!'})
})

module.exports = routerhomepage;