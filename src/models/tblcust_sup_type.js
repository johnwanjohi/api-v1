/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblcust_sup_type', {
    'cust_sup_typeid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'customersuppliertype': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    }
  }, {
    tableName: 'tblcust_sup_type'
  });
};
