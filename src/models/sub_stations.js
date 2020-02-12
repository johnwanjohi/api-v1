/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_stations', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'code': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'active': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "null"
    }
  }, {
    tableName: 'sub_stations'
  });
};
