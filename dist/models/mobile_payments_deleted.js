'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _transLoID;

  return sequelize.define('mobile_payments_deleted', {
    'transLoID': (_transLoID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_transLoID, 'primaryKey', true), _defineProperty(_transLoID, 'comment', "null"), _defineProperty(_transLoID, 'autoIncrement', true), _transLoID),
    'TransactionType': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'TransID': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'TransTime': {
      type: DataTypes.STRING(14),
      allowNull: false,
      comment: "null"
    },
    'TransAmount': {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "null"
    },
    'BusinessShortCode': {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "null"
    },
    'BillRefNumber': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'InvoiceNumber': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'OrgAccountBalance': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'ThirdPartyTransID': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'MSISDN': {
      type: DataTypes.STRING(14),
      allowNull: false,
      comment: "null"
    },
    'FirstName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'MiddleName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'LastName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mobile_payments_deleted'
  });
};