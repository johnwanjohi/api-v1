'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('suppliers', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'sname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'postcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'town': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'mobile': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'vatno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'suppliers'
  });
};