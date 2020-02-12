'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _refno;

  return sequelize.define('drivers', {
    'description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'basic_pay': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'house_allowance': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'gross_pay': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'idno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nssf_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nhif_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'kra_pin_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dlno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'refno': (_refno = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_refno, 'primaryKey', true), _defineProperty(_refno, 'comment', "null"), _defineProperty(_refno, 'autoIncrement', true), _refno),
    'dlexpiry': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'bloodgroup': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'postcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'town': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobile1': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobile2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'logo': {
      type: "BLOB",
      allowNull: true,
      comment: "null"
    },
    'joindate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'dob': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'age': {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'dstatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'terminatedate': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'gender': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'availability': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'psv': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'rtime': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'rdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'destination': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'NAIROBI',
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
    'paymentmethod': {
      type: DataTypes.ENUM('bank', 'cash', 'mobilemoney'),
      allowNull: true,
      defaultValue: 'cash',
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
    'nhif_pay': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'nssf_pay': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'paye_pay': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    }
  }, {
    tableName: 'drivers'
  });
};