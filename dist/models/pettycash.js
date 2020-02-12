'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('pettycash', {
    'DATE': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'vno': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'acccode': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'dr': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cr': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'receivedby': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'authorisedby': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'comment': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'TYPE': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'dnote': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'amount_ug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'driver_conductor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'driver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'conductor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'inspector': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'salary_advance_month': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'isposted': {
      type: DataTypes.ENUM('Y', 'N'),
      allowNull: true,
      defaultValue: 'Y',
      comment: "null"
    },
    'date_posted': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'posted_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dr_backup': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cr_backup': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'openbooking_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'inv_receipt_status': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'employee_category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'voucherno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'invoicenumber': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lponumber': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paidfrom': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paidto': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'memo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'modeofpayment': {
      type: DataTypes.ENUM('CASH', 'CHEQUE', 'TRANSFER', 'MOBILE MONEY'),
      allowNull: true,
      comment: "null"
    },
    'paymentreference': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'currency': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'approved': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'SYSTEM',
      comment: "null"
    },
    'dateapproved': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'pettycash'
  });
};