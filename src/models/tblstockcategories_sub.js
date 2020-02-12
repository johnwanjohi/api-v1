/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockcategories_sub', {
    'stockcategories_subid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'stockcategoryid': {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      comment: "null"
    },
    'stockcategory_sub': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'stockcategorycode_sub': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcategories_sub'
  });
};
