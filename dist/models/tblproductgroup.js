'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _productgroupid;

  return sequelize.define('tblproductgroup', {
    'productgroupid': (_productgroupid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_productgroupid, 'primaryKey', true), _defineProperty(_productgroupid, 'comment', "null"), _defineProperty(_productgroupid, 'autoIncrement', true), _productgroupid),
    'productgroup': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblproductgroup'
  });
};