/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xrate', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    't_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'kshs': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'ushs': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'tshs': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'usd': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'euro': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'xrate'
  });
};
