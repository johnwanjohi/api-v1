'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('incidents', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'incdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'driver': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'conductor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'incident': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'actiontaken': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'document_status': {
      type: DataTypes.ENUM('Draft', 'Published', 'Cancelled'),
      allowNull: true,
      defaultValue: 'Draft',
      comment: "null"
    },
    'document_status_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'incidents'
  });
};