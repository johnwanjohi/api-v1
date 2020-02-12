'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _stockitemid;

  return sequelize.define('tblstockitems', {
    'stockitemid': (_stockitemid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_stockitemid, 'primaryKey', true), _defineProperty(_stockitemid, 'comment', "null"), _defineProperty(_stockitemid, 'autoIncrement', true), _stockitemid),
    'stockcategoryidf': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockcategories_subid': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockitemname': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'stockitemdescription': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'itemcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unitofmeasureidf': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'unitprice': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'manufacturer_partno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'photo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockitems'
  });
};