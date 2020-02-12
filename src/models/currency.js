/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currency', {
    'iso_code': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'currency_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unit_name_major': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unit_name_minor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'decimals': {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      comment: "null"
    },
    'formart': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'currency_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    }
  }, {
    tableName: 'currency'
  });
};
