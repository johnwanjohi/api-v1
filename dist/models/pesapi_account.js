'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('pesapi_account', {
    'id': (_id = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
    'type': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'identifier': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'push_in': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'push_out': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'push_neutral': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'settings': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'pesapi_account'
  });
};