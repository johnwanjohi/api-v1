'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _customer_categoryid;

  return sequelize.define('tblcustomercategory', {
    'customer_categoryid': (_customer_categoryid = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_customer_categoryid, 'primaryKey', true), _defineProperty(_customer_categoryid, 'comment', "null"), _defineProperty(_customer_categoryid, 'autoIncrement', true), _customer_categoryid),
    'customer_category': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblcustomercategory'
  });
};