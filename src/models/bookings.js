/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookings', {
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
    'fromdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'todate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'nbrbus': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'paymode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'chqnbr': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paystatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paydate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bookings'
  });
};
