'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _b2bTransactionID;

  return sequelize.define('b2b_api_response', {
    'b2bTransactionID': (_b2bTransactionID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_b2bTransactionID, 'primaryKey', true), _defineProperty(_b2bTransactionID, 'comment', "null"), _defineProperty(_b2bTransactionID, 'autoIncrement', true), _b2bTransactionID),
    'TransactionID': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'InitiatorAccountCurrentBalance': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'DebitAccountCurrentBalance': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyAffectedAccountBalance': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransCompletedTime': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyCharges': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ReceiverPartyPublicName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'Currency': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'UpdatedTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'b2b_api_response'
  });
};