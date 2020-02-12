/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loaded_waybills', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'waybill_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'loading_sheet_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'loaded_quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'scanned': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'scannedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'scan_date': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'loaded_waybills'
  });
};
