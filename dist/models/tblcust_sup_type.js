'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _cust_sup_typeid;

  return sequelize.define('tblcust_sup_type', {
    'cust_sup_typeid': (_cust_sup_typeid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_cust_sup_typeid, 'primaryKey', true), _defineProperty(_cust_sup_typeid, 'comment', "null"), _defineProperty(_cust_sup_typeid, 'autoIncrement', true), _cust_sup_typeid),
    'customersuppliertype': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    }
  }, {
    tableName: 'tblcust_sup_type'
  });
};