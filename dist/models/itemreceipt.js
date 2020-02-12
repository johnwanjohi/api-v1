'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('itemreceipt', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'itemcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'itemcost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'totalcost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transtype': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Receipt',
      comment: "null"
    },
    'paymode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Cash',
      comment: "null"
    },
    'chqnbr': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paystatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Paid',
      comment: "null"
    },
    'paydate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'lpono': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'invoiceno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'itemreceipt'
  });
};