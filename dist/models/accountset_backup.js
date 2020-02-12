'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('accountset_backup', {
    'code': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'glcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TYPE': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'DR',
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'active',
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'category': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'accountset_backup'
  });
};