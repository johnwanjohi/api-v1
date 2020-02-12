'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('uclog', {
    'IdUser': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'MSG': {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "null"
    },
    'Data': {
      type: DataTypes.STRING(14),
      allowNull: true,
      comment: "null"
    },
    'Nivel': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'uclog'
  });
};