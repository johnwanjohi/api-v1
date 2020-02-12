'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _transactionStatusID;

  return sequelize.define('transaction_status', {
    'transactionStatusID': (_transactionStatusID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_transactionStatusID, 'primaryKey', true), _defineProperty(_transactionStatusID, 'comment', "null"), _defineProperty(_transactionStatusID, 'autoIncrement', true), _transactionStatusID),
    'ReceiptNo': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ConversationID': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'FinalisedTime': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransactionStatus': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ReasonType': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyCharges': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'DebitAccountType': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'InitiatedTime': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'OriginatorConversationID': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'CreditPartyName': {
      type: DataTypes.STRING(55),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'updatedTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'transaction_status'
  });
};