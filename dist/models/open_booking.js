'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('open_booking', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'route_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'booktime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'chart_status': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'UNLOCKED',
      comment: "null"
    },
    'bus_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bus_number': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bus_scheduled_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_locked': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'date_unlocked': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'locked_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unlocked_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'co_driver_seatno': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'sms_seats': {
      type: DataTypes.ENUM('YES', 'NO'),
      allowNull: true,
      defaultValue: 'NO',
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'open_booking'
  });
};