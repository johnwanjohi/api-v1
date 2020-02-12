'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('tbltrucks_assigned_drivers', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'tbltrucks_refno': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'drivers_refno': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'assigned_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tbltrucks_assigned_drivers'
  });
};