'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _unitofmeasureid;

  return sequelize.define('tblunitofmeasure', {
    'unitofmeasureid': (_unitofmeasureid = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_unitofmeasureid, 'primaryKey', true), _defineProperty(_unitofmeasureid, 'comment', "null"), _defineProperty(_unitofmeasureid, 'autoIncrement', true), _unitofmeasureid),
    'unitofmeasure': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'unitofmeasure_desc': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'tblunitofmeasure'
  });
};