'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('banking_comment', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'depositor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bank_diff': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'bank_diff_ug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'amounttodeduct': {
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
    'bank_diffug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'tobededucted': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'approved': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'dateapproved': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'enteredby': {
      type: DataTypes.STRING(50),
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
    tableName: 'banking_comment'
  });
};