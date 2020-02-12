/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpesa_payments', {
    'Auto': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'TransactionType': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TransID': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TransTime': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'TransAmount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'BusinessShortCode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'BillRefNumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'InvoiceNumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'MSISDN': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'FirstName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'MiddleName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'LastName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'OrgAccountBalance': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mpesa_payments'
  });
};
