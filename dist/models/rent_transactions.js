'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('rent_transactions', {
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'from_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "period from"
    },
    'to_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "period_to"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.ENUM('CHEQUE', 'CASH', 'MPESA'),
      allowNull: true,
      defaultValue: 'CHEQUE',
      comment: "null"
    },
    'payment_ref': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sup_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "land lord"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'rent_transactions'
  });
};