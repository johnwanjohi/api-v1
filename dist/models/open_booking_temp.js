'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _indexq;

  return sequelize.define('open_booking_temp', {
    'indexq': (_indexq = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_indexq, 'primaryKey', true), _defineProperty(_indexq, 'comment', "null"), _defineProperty(_indexq, 'autoIncrement', true), _indexq),
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'from': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'open_booking_temp'
  });
};