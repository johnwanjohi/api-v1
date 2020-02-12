/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
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
    'v_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'transactions'
  });
};
