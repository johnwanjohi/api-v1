'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('locations', {
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'code': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('ACTIVE', 'DISABLED'),
      allowNull: true,
      defaultValue: 'ACTIVE',
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'is_hq': {
      type: DataTypes.ENUM('No', 'Yes'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'is_workshop': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    }
  }, {
    tableName: 'locations'
  });
};