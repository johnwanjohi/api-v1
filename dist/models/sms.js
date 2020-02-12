'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('sms', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'phone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'smscenter': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'received_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'read': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'isshortcode': {
      type: DataTypes.ENUM('Y', 'N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    }
  }, {
    tableName: 'sms'
  });
};