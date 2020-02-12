'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('tyrechange', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mileage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'serialno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ttype': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'tsize': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'invno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'axile': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'remdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'remmileage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'remcomment': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'kmscovered': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tyrechange'
  });
};