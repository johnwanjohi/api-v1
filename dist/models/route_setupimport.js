'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('route_setupimport', {
    'id': (_id = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
    'route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'from': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'route_setupimport'
  });
};