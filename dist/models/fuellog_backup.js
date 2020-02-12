'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('fuellog_backup', {
    'fdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'orderno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_driver': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lastkm': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'currentkm': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'fueledvolume': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'invoiceno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_conductor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ispaid': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'transaction_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'not_payment',
      comment: "null"
    },
    'cheque_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('activate', 'deleted'),
      allowNull: true,
      comment: "null"
    },
    't_driver2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'enteredby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
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
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'fuellog_backup'
  });
};