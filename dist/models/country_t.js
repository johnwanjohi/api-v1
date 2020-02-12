'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _country_id;

  return sequelize.define('country_t', {
    'country_id': (_country_id = {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_country_id, 'primaryKey', true), _defineProperty(_country_id, 'comment', "null"), _defineProperty(_country_id, 'autoIncrement', true), _country_id),
    'iso2': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'long_name': {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'iso3': {
      type: DataTypes.CHAR(3),
      allowNull: true,
      comment: "null"
    },
    'numcode': {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "null"
    },
    'un_member': {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "null"
    },
    'calling_code': {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "null"
    },
    'cctld': {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'country_t'
  });
};