/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waybill_info_barcodes', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'waybill_info_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'serial': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'barcode_data': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'l_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'loadedon': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'scannedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'offloadedon': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'offloadscannby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'waybill_info_barcodes'
  });
};
