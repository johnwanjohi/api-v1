'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _stockcategoryid;

  return sequelize.define('tblstockcategories', {
    'stockcategoryid': (_stockcategoryid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_stockcategoryid, 'primaryKey', true), _defineProperty(_stockcategoryid, 'comment', "null"), _defineProperty(_stockcategoryid, 'autoIncrement', true), _stockcategoryid),
    'stockcategory': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'stockcategorycode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcategories'
  });
};