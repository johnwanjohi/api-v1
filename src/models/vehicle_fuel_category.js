/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicle_fuel_category', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'vehicle_fuel_category': {
      type: DataTypes.ENUM('CATEGORY_S','CATEGORY_U'),
      allowNull: true,
      defaultValue: 'CATEGORY_S',
      comment: "null"
    }
  }, {
    tableName: 'vehicle_fuel_category'
  });
};
