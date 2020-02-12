'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('accountset', {
    'code': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'glcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TYPE': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'DR',
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'active',
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'category': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'category_old': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'hq_only': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'controlling_account': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'is_workshop': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
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
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'is_for_approval': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    }
  }, {
    tableName: 'accountset'
  });
};