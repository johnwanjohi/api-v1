'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('cheque_tracking', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'chequeno': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'datewritten': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'paidto': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paymentreason': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'bankaccountno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bankname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'chequedate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'amountkes': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'amountusd': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Pending', 'Deposited and Not Yet Paid', 'Paid', 'Bounced', 'Held'),
      allowNull: true,
      comment: "null"
    },
    'comment': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paiddate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cheque_tracking'
  });
};