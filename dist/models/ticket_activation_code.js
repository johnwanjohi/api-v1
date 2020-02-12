'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('ticket_activation_code', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'seatno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ticket_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'ticket_activation_code'
  });
};