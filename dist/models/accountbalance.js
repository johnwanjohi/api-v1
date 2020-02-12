'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _accountBalID;

  return sequelize.define('accountbalance', {
    'accountBalID': (_accountBalID = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_accountBalID, 'primaryKey', true), _defineProperty(_accountBalID, 'comment', "null"), _defineProperty(_accountBalID, 'autoIncrement', true), _accountBalID),
    'WorkingAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'FloatAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'UtilityAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ChargesPaidAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'OrganizationSettlementAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'BOCompletedTime': {
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
    tableName: 'accountbalance'
  });
};