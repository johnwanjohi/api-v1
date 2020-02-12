'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('promorates_setup', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    't_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'promo_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'calc_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'promo_ratestudent': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'calc_ratestudent': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'promorates_setup'
  });
};