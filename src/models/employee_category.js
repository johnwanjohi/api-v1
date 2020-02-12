/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_category', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'category': {
      type: DataTypes.STRING(50),
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
    },
    'code': {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'employee_category'
  });
};
