/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seats_setup', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bus_type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'seat': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'seats_setup'
  });
};
