'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('tbltrucks', {
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'make': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'vehicle_fuel_category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unit_id': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'model': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'tonnage': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'millage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'chasisno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'nextservice': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'lastfuel': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'available': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'vcondition': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'conditiondate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'availabledate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'destination': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'no_of_seats': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'active': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      comment: "null"
    },
    't_driver2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'truck_id': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'no_of_seats_old': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tbltrucks'
  });
};