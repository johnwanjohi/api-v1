'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('transactions', {
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
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dr': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cr': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'v_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'transactions'
  });
};