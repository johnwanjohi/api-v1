'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('user_logins', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_login': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'ip': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'time_loggedin': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'Login': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'user_mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'actualcollected': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'collectedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecollected': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'updatedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateupdated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'user_logins'
  });
};