/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_nssf', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'lower_bound': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'upper_bound': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_updated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'employee_nssf'
  });
};
