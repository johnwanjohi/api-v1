/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b2c_api_response', {
    'b2bID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'TransactionReceipt': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'TransactionAmount': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CWorkingAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CUtilityAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'TransactionCompletedDateTime': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ReceiverPartyPublicName': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'B2CChargesPaidAccountAvailableFunds': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'B2CRecipientIsRegisteredCustomer': {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "null"
    },
    'UpdatedTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'b2c_api_response'
  });
};
