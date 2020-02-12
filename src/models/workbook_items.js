/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workbook_items', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'workbook_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockitemid': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockitemname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'qty': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'qty_issued': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'workbook_items'
  });
};
