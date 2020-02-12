/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemissues', {
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
    'itemcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'issuedto': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'totalcost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'transtype': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Issue',
      comment: "null"
    }
  }, {
    tableName: 'itemissues'
  });
};
