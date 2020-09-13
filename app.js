// import express from "express";
var express = require('express');
var app = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const tokenList = {};
// import path from 'path';
var path = require('path');
// import logger from 'morgan';
var logger = require('morgan');
// import cookieParser from 'cookie-parser';
var cookieParser = require('cookie-parser');
// import bodyParser from 'body-parser';
var bodyParser = require('body-parser');

var routes = require('./src/routes');
var config = require('./src/config/settings');

var options = {
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.pass,
    database: config.database.name
};

var sessionStore = new MySQLStore(options);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(logger('dev'));
app.use(cookieParser("secretSign#143_!223"));
app.use(session({
    secret: config.mysecret.salt,
    name: 'johnAPI',
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: false,
        maxAge: 1000 * 60 * 60 * 24 // Time is in miliseconds
    },
    // create new mysql store.
    store: sessionStore,
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var urlPrefix = config.server.urlPref;
// app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    var origins = 'https://crownbus-ea.com:*';
    // res.header('Access-Control-Allow-Origin', origins);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept, Authorization, authorization, apitoken");
    res.header("apitoken", "");
    next();
});

app.use(urlPrefix, routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('The link you are trying to acccess does not exist.You are required to login');
    err.status = 404;

    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);

    res.render('error');
});

module.exports = app;