'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _l_ref;

  return sequelize.define('loading_sheet', {
    'w_origin': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'w_destination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'load_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_ref': (_l_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_l_ref, 'primaryKey', true), _defineProperty(_l_ref, 'comment', "null"), _defineProperty(_l_ref, 'autoIncrement', true), _l_ref),
    'l_driver2': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_driver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_conductor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sys_uniq_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'loading_sheet'
  });
};