/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobile_payments', {
    'transLoID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'TransactionType': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'TransID': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'TransTime': {
      type: DataTypes.STRING(14),
      allowNull: false,
      comment: "null"
    },
    'TransAmount': {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "null"
    },
    'BusinessShortCode': {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "null"
    },
    'BillRefNumber': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'InvoiceNumber': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'OrgAccountBalance': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'ThirdPartyTransID': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'MSISDN': {
      type: DataTypes.STRING(14),
      allowNull: false,
      comment: "null"
    },
    'FirstName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'MiddleName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'LastName': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mobile_payments'
  });
};
