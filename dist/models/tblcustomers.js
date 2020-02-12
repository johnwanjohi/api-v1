'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _customerid;

  return sequelize.define('tblcustomers', {
    'customerid': (_customerid = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_customerid, 'primaryKey', true), _defineProperty(_customerid, 'comment', "null"), _defineProperty(_customerid, 'autoIncrement', true), _customerid),
    'customername': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'contactperson': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'department': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customerfax': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customeremail': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customertown': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customercountry': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'cust_sup_typeidf': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'customer_categoryidf': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'tblcustomers'
  });
};