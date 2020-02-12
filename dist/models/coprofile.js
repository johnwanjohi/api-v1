'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('coprofile', {
    'companyname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'pbox': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fax': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'tdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno)
  }, {
    tableName: 'coprofile'
  });
};