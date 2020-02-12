'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _transactionstatusID;

  return sequelize.define('reverse_transaction', {
    'transactionstatusID': (_transactionstatusID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_transactionstatusID, 'primaryKey', true), _defineProperty(_transactionstatusID, 'comment', "null"), _defineProperty(_transactionstatusID, 'autoIncrement', true), _transactionstatusID),
    'DebitAccountBalance': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransCompletedTime': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'OriginalTransactionID': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'Charge': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'CreditPartyPublicName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyPublicName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'updateTime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'reverse_transaction'
  });
};