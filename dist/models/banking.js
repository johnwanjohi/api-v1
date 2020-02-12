'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('banking', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'banking_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'chq_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'slip_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'deposit_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'account_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bank': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'branch': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'depositor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'sales_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'banking_type': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'approved': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateapproved': {
      type: DataTypes.DATE,
      allowNull: true,
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
      comment: "null"
    }
  }, {
    tableName: 'banking'
  });
};