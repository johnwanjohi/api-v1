'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('assets', {
    'refno': (_refno = {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'brand': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'model': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'serialno': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'purchasevalue': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'purchasedate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'currentvalue': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'location': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'responsibleperson': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'assets'
  });
};