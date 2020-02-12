'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('bchat', {
    'seatno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bus_type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'ticketstatus': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref)
  }, {
    tableName: 'bchat'
  });
};