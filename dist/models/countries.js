'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('countries', {
    'ISO_Code': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'Country': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'Region': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'Capital': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'Currency': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'CountryID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      autoIncrement: true,
      unique: true
    }
  }, {
    tableName: 'countries'
  });
};