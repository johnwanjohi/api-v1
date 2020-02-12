'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _b2bID;

  return sequelize.define('b2c_api_response', {
    'b2bID': (_b2bID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_b2bID, 'primaryKey', true), _defineProperty(_b2bID, 'comment', "null"), _defineProperty(_b2bID, 'autoIncrement', true), _b2bID),
    'TransactionReceipt': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'TransactionAmount': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CWorkingAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CUtilityAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'TransactionCompletedDateTime': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ReceiverPartyPublicName': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'B2CChargesPaidAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CRecipientIsRegisteredCustomer': {
      type: DataTypes.STRING(2),
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
    tableName: 'b2c_api_response'
  });
};