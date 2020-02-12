'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _stockcardid;

  return sequelize.define('tblstockcard', {
    'stockcardid': (_stockcardid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_stockcardid, 'primaryKey', true), _defineProperty(_stockcardid, 'comment', "null"), _defineProperty(_stockcardid, 'autoIncrement', true), _stockcardid),
    'stockitemidf': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'location': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'minimun_qty': {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'tblstockcard'
  });
};