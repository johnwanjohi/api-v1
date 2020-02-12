'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _Auto;

  return sequelize.define('mpesa_payments', {
    'Auto': (_Auto = {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_Auto, 'primaryKey', true), _defineProperty(_Auto, 'comment', "null"), _defineProperty(_Auto, 'autoIncrement', true), _Auto),
    'TransactionType': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TransID': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TransTime': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'TransAmount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'BusinessShortCode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'BillRefNumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'InvoiceNumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'MSISDN': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'FirstName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'MiddleName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'LastName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'OrgAccountBalance': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mpesa_payments'
  });
};