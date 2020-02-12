/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('route_setupimport', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'from': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'route_setupimport'
  });
};
