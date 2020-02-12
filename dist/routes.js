'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Uccaduser = require('./controllers/Uccaduser.controller');

var _Uccaduser2 = _interopRequireDefault(_Uccaduser);

var _Cities_scheduled = require('./controllers/Cities_scheduled.controller');

var _Cities_scheduled2 = _interopRequireDefault(_Cities_scheduled);

var _Grouped_cities = require('./controllers/Grouped_cities.controller');

var _Grouped_cities2 = _interopRequireDefault(_Grouped_cities);

var _middleware = require('../src/auth/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	File cointaining all routes to the controllers of the platform
*/

// import userCtrl from './controllers/Users.controller.js';
var router = _express2.default.Router();
router.post('/login', _Uccaduser2.default.login);
router.get('/users', _middleware2.default.authorization, _Uccaduser2.default.list);
// router.get('/users', userCtrl.list);
router.get('/login', _Uccaduser2.default.login);
router.get('/cities_scheduled', _Cities_scheduled2.default.list);
router.get('/fromtotown', _Grouped_cities2.default.list);

module.exports = router;