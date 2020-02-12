'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _userroleid;

  return sequelize.define('userroles', {
    'userroleid': (_userroleid = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_userroleid, 'primaryKey', true), _defineProperty(_userroleid, 'comment', "null"), _defineProperty(_userroleid, 'autoIncrement', true), _userroleid),
    'iduser': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'role': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'userroles'
  });
};