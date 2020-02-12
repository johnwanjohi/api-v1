'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('employee_payrollsalpayment', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'payroll_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'period_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'employee_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'datepaid': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'saldescription': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'payrollnetamount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'amountpaid': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'updatedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateupdated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'employee_payrollsalpayment'
  });
};