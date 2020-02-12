/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tyrechange', {
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
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mileage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'serialno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ttype': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'tsize': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'invno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'axile': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'remdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'remmileage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'remcomment': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'kmscovered': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tyrechange'
  });
};
