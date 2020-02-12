'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _productsid;

  return sequelize.define('tblproducts', {
    'productsid': (_productsid = {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_productsid, 'primaryKey', true), _defineProperty(_productsid, 'comment', "null"), _defineProperty(_productsid, 'autoIncrement', true), _productsid),
    'productgroupidf': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
      comment: "null"
    },
    'modelno': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'unitprice_usd': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'dimensions_mm': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'packing_dimension_mm': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'volume_cbm': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'net_weight_kgs': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'gross_weight_kgs': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'picture': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'power_kw': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'voltage_frequency_v_hz': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'heat_flux_kw_h': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'brand': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'origin': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'productgroup': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblproducts'
  });
};