/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_loan', {
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
    'voucher_no_loan': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'loan_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'loan_description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'loan_amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'installments': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      comment: "null"
    },
    'repayment_amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'loan_balance': {
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
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'date_updated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'loantype': {
      type: DataTypes.ENUM('Loan','Short'),
      allowNull: true,
      defaultValue: 'Loan',
      comment: "null"
    }
  }, {
    tableName: 'employee_loan'
  });
};
