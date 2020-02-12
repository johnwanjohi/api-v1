/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockcategorytype', {
    'stockcategorytypeid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      autoIncrement: true,
      unique: true
    },
    'stockcategoryidf': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'stockcategorytype': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcategorytype'
  });
};
