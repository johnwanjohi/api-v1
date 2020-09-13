/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicle_locations', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'loading_sheet_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'vehicle_locations'
  });
};
