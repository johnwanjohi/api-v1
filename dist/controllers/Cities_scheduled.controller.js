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
  _sequelize2.default.cities_scheduled.findAll({
    attributes: {
      exclude: ['Password']
    }
  }).then(function (data) {
    console.log(data);
    _common2.default.ok(res, data);
  });
}

module.exports = {
  list: list
  /*,
  login,
  register,
  profile
  */

};