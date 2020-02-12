'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('vehicle_fuel_category', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'vehicle_fuel_category': {
      type: DataTypes.ENUM('CATEGORY_S', 'CATEGORY_U'),
      allowNull: true,
      defaultValue: 'CATEGORY_S',
      comment: "null"
    }
  }, {
    tableName: 'vehicle_fuel_category'
  });
};