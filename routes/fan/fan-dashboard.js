const routerdashboardfan = require('express').Router();


routerdashboardfan.get('/fan-dashboard', (req, res) => {
    res.render('./fan/fan-dashboard.ejs', {title: "Hi there! Welcome to Amuso"})
})

module.exports = routerdashboardfan;