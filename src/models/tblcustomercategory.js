/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblcustomercategory', {
    'customer_categoryid': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'customer_category': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblcustomercategory'
  });
};
