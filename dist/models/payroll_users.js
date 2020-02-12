'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('payroll_users', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    }
  }, {
    tableName: 'payroll_users'
  });
};