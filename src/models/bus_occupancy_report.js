/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bus_occupancy_report', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'date_sent': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null",
      unique: true
    },
    'message': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bus_occupancy_report'
  });
};
