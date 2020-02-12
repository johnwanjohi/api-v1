'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('tempanalysis', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'c001': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c002': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c003': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c004': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c005': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c006': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c007': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c008': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c009': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c010': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c011': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c012': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c013': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c014': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c015': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c016': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c017': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c018': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c019': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c020': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c021': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c022': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c023': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c024': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c025': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c026': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c027': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c028': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c029': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c030': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c031': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c032': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c033': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'c034': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tempanalysis'
  });
};