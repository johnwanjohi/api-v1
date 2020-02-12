'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('clients_payments', {
    'refno': (_refno = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'datereceived': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'client_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amountreceived': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.ENUM('CASH', 'CHEQUE', 'MPESA'),
      allowNull: true,
      comment: "null"
    },
    'paymentref': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
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
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'updatedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateupdated': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00',
      comment: "null"
    }
  }, {
    tableName: 'clients_payments'
  });
};