'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('users', {
    'id': (_id = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
    'email': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    },
    'password': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'users'
  });
};