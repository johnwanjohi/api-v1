'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('dep_schedule_archive', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'depdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'driver': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'driver2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'destination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'deptime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'conductor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'dstatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'cstatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'dep_schedule_archive'
  });
};