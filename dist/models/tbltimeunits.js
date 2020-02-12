'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _timeunitid;

  return sequelize.define('tbltimeunits', {
    'timeunitid': (_timeunitid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_timeunitid, 'primaryKey', true), _defineProperty(_timeunitid, 'comment', "null"), _defineProperty(_timeunitid, 'autoIncrement', true), _timeunitid),
    'timeunit': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tbltimeunits'
  });
};