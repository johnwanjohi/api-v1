'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('journal_entry', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'journal_number': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'journal_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'account_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'account_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'debit_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'credit_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'credit_amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'debit_amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'entered_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'journal_description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ref_ticket': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'pettycash_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'journal_entry'
  });
};