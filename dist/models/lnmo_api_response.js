'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _lnmoID;

  return sequelize.define('lnmo_api_response', {
    'lnmoID': (_lnmoID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_lnmoID, 'primaryKey', true), _defineProperty(_lnmoID, 'comment', "null"), _defineProperty(_lnmoID, 'autoIncrement', true), _lnmoID),
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'MpesaReceiptNumber': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransactionDate': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'PhoneNumber': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'updateTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'lnmo_api_response'
  });
};