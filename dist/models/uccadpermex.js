'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uccadpermex', {
    'IdUser': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'Modulo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ObjName': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'FormName': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'uccadpermex'
  });
};