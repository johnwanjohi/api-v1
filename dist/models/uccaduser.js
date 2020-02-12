'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _IdUser;

  return sequelize.define('uccaduser', {
    'IdUser': (_IdUser = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_IdUser, 'primaryKey', true), _defineProperty(_IdUser, 'comment', "null"), _defineProperty(_IdUser, 'autoIncrement', true), _IdUser),
    'Nome': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "null"
    },
    'Login': {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "null"
    },
    'Senha': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "null"
    },
    'Email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'Privilegiado': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'Tipo': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'Perfil': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'Password': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'status_old': {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active', 'Disabled', 'Terminated'),
      allowNull: true,
      comment: "null"
    },
    'usertype': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'lastactivity': {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'lastupdatedon': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'last_ip': {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "null"
    },
    'mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'disable_reason': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'title': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_statuschanged': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'original_sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'uccaduser'
  });
};