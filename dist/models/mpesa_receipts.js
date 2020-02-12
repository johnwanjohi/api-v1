'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _Number;

  return sequelize.define('mpesa_receipts', {
    'Number': (_Number = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_Number, 'primaryKey', true), _defineProperty(_Number, 'comment', "null"), _defineProperty(_Number, 'autoIncrement', true), _Number),
    'FName': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'MName': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'LName': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'TransactionType': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'TransID': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'TransTime': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'TransAmount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'ShortCode': {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "null"
    },
    'BillRefNumber': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "null"
    },
    'InvoiceNumber': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "null"
    },
    'ThirdPartyTransID': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'MSISDN': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mpesa_receipts'
  });
};