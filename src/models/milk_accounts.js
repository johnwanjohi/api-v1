/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milk_accounts', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'clientname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'transdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'qty_20': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'qty_10': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'qty_5': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'unit_cost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'milk_accounts'
  });
};
