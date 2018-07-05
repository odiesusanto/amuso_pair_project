'use strict'
const express = require('express');
const app = express();
const session = require('express-session');


const routerhomepage = require('./routes/homepage');
const routerdashboardfan = require('./routes/fan/fan-dashboard');
const routerdashboardmuso = require('./routes/muso/muso-dashboard');
const routerfanregister = require('./routes/fan/fan-register');
const routerfanprofile = require('./routes/fan/fan-profile')
const routermusoregister = require('./routes/muso/muso-register');
const routermusos = require('./routes/muso/musos');
const routerproject = require('./routes/project/projects');
const routercreateproject = require('./routes/project/create-project');
const routerfancontributions = require('./routes/fan/fan-contributions');
const routeraddcontributions = require('./routes/fan/addcontributions');
const routermusologin = require('./routes/muso/muso-login')

const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'ajsdbfajsdbvjhas',
    resave: false,
    saveUninitialized: true
}))

app.set('views', __dirname + '/views')
app.use(routerhomepage);
app.use('/fan', routerdashboardfan);
app.use('/muso', routerdashboardmuso);
app.use('/fan', routerfanregister);
app.use('/fan', routerfanprofile);
app.use('/muso', routermusoregister);
app.use('/fan', routerfancontributions);
app.use('/fan', routeraddcontributions);
app.use(routermusos);
app.use(routerproject);
app.use(routercreateproject);
app.use('/muso', routermusologin);


app.listen(3000, function () {
console.log('started on port 3000');
})
