const routerdashboardmuso = require('express').Router();

routerdashboardmuso.get('/muso-dashboard', (req, res) => {
    // res.send('YAY for musos')
    res.render('./muso/muso-dashboard.ejs', {title: 'Hi MUSO! Enjoy Amuso!'})
})


module.exports = routerdashboardmuso;