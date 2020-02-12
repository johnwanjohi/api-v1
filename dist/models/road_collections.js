'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('road_collections', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'conductor_road': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'receiptno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'ticketno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00',
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount_words': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'inspector_road': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bookno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'agent_road': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'received_time': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'updated_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'from_bookno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'to_bookno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active', 'Deleted'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    }
  }, {
    tableName: 'road_collections'
  });
};