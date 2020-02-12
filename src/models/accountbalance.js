/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountbalance', {
    'accountBalID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'WorkingAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'FloatAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'UtilityAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'ChargesPaidAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'OrganizationSettlementAccount': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'BOCompletedTime': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'updatedTime': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'accountbalance'
  });
};
