/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_salary_advance', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'employee_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'period_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'voucher_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'salary_advance_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'salary_advance_description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'advance_amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'entered_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
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
    tableName: 'employee_salary_advance'
  });
};
