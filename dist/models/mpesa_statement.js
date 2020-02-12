'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('mpesa_statement', {
    '4': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    '6': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    '8': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    '9': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'id': (_id = {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
    'receipt': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'time': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'phonenumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'note': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mpesa_statement'
  });
};