'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _sequelize = require('../config/sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _common = require('../tools/common');

var _common2 = _interopRequireDefault(_common);

var _settings = require('../config/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res) {
  // models.users.findAll( {attributes: {
  _sequelize2.default.uccaduser.findAll({
    attributes: {
      exclude: ['Password']
    }
  }).then(function (data) {
    console.log(data);
    _common2.default.ok(res, data);
  });
}
function login(req, res, next) {
  _sequelize2.default.users.find({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(function (userL) {
    var data = userL.dataValues;
    var theToken = _jsonwebtoken2.default.sign({ user: data.id, email: data.email }, _settings2.default.security.salt, { expiresIn: 24 * 60 * 60 });
    _common2.default.ok(res, { 'token': theToken });
  }).catch(function (e) {
    _common2.default.error(res, 'Wrong credentials', 500);
  });
}
function register(req, res, next) {
  _sequelize2.default.user.build({
    nickname: req.body.nickname,
    name: req.body.name,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id
  }).save().then(function () {
    _common2.default.ok(res, null);
  }).catch(function (e) {
    _common2.default.error(res, "Could not process your request", 500);
  });
}
function profile(req, res, next) {
  _sequelize2.default.user.findById(req.params.id, { attributes: {
      exclude: ['password']
    } }).then(function (userL) {
    _common2.default.ok(userL);
  }).catch(function (e) {
    _common2.default.error(res, e, 500);
  });
}
module.exports = {
  list: list,
  login: login,
  register: register,
  profile: profile

};