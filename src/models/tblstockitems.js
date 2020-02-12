/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockitems', {
    'stockitemid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'stockcategoryidf': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockcategories_subid': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'stockitemname': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'stockitemdescription': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'itemcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'unitofmeasureidf': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'unitprice': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'manufacturer_partno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'photo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockitems'
  });
};
