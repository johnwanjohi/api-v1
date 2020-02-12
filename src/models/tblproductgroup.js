/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblproductgroup', {
    'productgroupid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'productgroup': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblproductgroup'
  });
};
