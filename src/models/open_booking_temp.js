/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('open_booking_temp', {
    'indexq': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
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
    }
  }, {
    tableName: 'open_booking_temp'
  });
};
