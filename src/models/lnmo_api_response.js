/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lnmo_api_response', {
    'lnmoID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Amount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'MpesaReceiptNumber': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'TransactionDate': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'PhoneNumber': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'updateTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'lnmo_api_response'
  });
};
