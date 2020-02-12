/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll_users', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    }
  }, {
    tableName: 'payroll_users'
  });
};
