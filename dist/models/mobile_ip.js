'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('mobile_ip', {
    'ip': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'use_online_api': {
      type: DataTypes.ENUM('True', 'False'),
      allowNull: true,
      defaultValue: 'True',
      comment: "null"
    },
    'ref': (_ref = {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref)
  }, {
    tableName: 'mobile_ip'
  });
};