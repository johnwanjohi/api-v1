/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_payroll', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'employee_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'employee_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'designation': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'basic_pay': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'overtime': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'house_allowance': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'bonus': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'gross_pay': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'personal_relief': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '1408.000',
      comment: "null"
    },
    'chargeable_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'loan_bf': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'nssf': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'nhif': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'paye': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'total_advance': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'loan_paid': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'net_pay': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'period_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'period': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updated_on': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'payroll_status': {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'deactivated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_deactivated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'paymentmethod': {
      type: DataTypes.ENUM('bank','cash','mobilemoney'),
      allowNull: true,
      comment: "null"
    },
    'paymentbankname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bankaccountno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bankshortcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobilemoneynumber': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nhif_pay': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'nssf_pay': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'paye_pay': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'paymentstatus': {
      type: DataTypes.ENUM('Cleared','OnHold'),
      allowNull: true,
      defaultValue: 'Cleared',
      comment: "null"
    },
    'daysworked': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '30',
      comment: "null"
    }
  }, {
    tableName: 'employee_payroll'
  });
};
