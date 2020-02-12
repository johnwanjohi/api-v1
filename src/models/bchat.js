/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bchat', {
    'seatno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bus_type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'ticketstatus': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    }
  }, {
    tableName: 'bchat'
  });
};
