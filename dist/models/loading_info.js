'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refx;

  return sequelize.define('loading_info', {
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'trans_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'consignor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'consignee': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_destination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'r_telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'pay_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'vatable': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'weight': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'pkg_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cbm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    's_telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'loaded': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Loaded',
      comment: "null"
    },
    'loadingsheetno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'loadsheetref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'vat_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cod_paid': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Paid',
      comment: "null"
    },
    'cod_paydate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'cod_receiver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cod_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cod_substation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_received': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Received',
      comment: "null"
    },
    'waybill_receivedby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedcondition': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedsubstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_delivered': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Delivered',
      comment: "null"
    },
    'waybill_deliveredate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredto': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredtoid': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredtomobile': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredsubstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'refx': (_refx = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refx, 'primaryKey', true), _defineProperty(_refx, 'comment', "null"), _defineProperty(_refx, 'autoIncrement', true), _refx),
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'waybill_status': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'cancel_reason': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'cancelled_by': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'newwaybillno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'tr_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'loading_info'
  });
};