/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parcel_delvehicle', {
    'w_origin': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'w_destination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'load_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'l_driver2': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_driver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'l_conductor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sys_uniq_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'loader': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'parcel_delvehicle'
  });
};
