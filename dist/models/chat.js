'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('chat', {
    'id': (_id = {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
    'from_user': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'to_user': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'message': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'sent': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00',
      comment: "null"
    },
    'recd': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'to_cc': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'to_user_cc': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'initially_sent_to': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'attachment': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'chat'
  });
};