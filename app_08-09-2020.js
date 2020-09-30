// import express from "express";
var express = require('express');
var session = require("express-session");
var cors = require('cors');
// import path from 'path';
var path = require('path');
// import logger from 'morgan';
var logger = require('morgan');
// import cookieParser from 'cookie-parser';
var cookieParser = require('cookie-parser');
// import bodyParser from 'body-parser';
var bodyParser = require('body-parser');
var routes = require('./src/routes/index');
var config = require('./src/config/settings');

var app = express();
var urlPrefix = config.server.urlPref;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',
    randomNumber, 
    { 
        maxAge: 900000, 
        httpOnly: true 
    });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'sessionWanjohi',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    var originsxx = 'https://crownbus-ea.com:*';
    var origins = req.headers.origin; //'https://crownbus-ea.com:*';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Method', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    // res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET,POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization, apitoken");
    res.header("apitoken", "");
    next();
});
// app.use('/api/v1/', routes);
app.use(urlPrefix, routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
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