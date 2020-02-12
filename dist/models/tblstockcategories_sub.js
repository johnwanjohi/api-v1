'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _stockcategories_subi;

  return sequelize.define('tblstockcategories_sub', {
    'stockcategories_subid': (_stockcategories_subi = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_stockcategories_subi, 'primaryKey', true), _defineProperty(_stockcategories_subi, 'comment', "null"), _defineProperty(_stockcategories_subi, 'autoIncrement', true), _stockcategories_subi),
    'stockcategoryid': {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      comment: "null"
    },
    'stockcategory_sub': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'stockcategorycode_sub': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcategories_sub'
  });
};