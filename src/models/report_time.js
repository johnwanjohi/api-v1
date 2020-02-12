/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_time', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'route_setup_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'route_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lastupdate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Not Active'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    }
  }, {
    tableName: 'report_time'
  });
};
