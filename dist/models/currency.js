'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _currency_id;

  return sequelize.define('currency', {
    'iso_code': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'currency_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unit_name_major': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unit_name_minor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'decimals': {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      comment: "null"
    },
    'formart': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'currency_id': (_currency_id = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_currency_id, 'primaryKey', true), _defineProperty(_currency_id, 'comment', "null"), _defineProperty(_currency_id, 'autoIncrement', true), _currency_id)
  }, {
    tableName: 'currency'
  });
};