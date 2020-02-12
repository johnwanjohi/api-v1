/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reverse_transaction', {
    'transactionstatusID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'DebitAccountBalance': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransCompletedTime': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "null"
    },
    'OriginalTransactionID': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'Charge': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'CreditPartyPublicName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'DebitPartyPublicName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'updateTime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'reverse_transaction'
  });
};
