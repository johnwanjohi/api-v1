/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fuellog_limit', {
    'fueledvolume': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    't_username': {
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
    'fromtown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'vehicle_fuel_category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'distance_kms': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'fuellog_limit'
  });
};
