'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('tblexpiry_copy', {
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'insexpiry': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'inspectionexpiry': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'speedgovernor': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'tlb': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'musiccopyright': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblexpiry_copy'
  });
};