/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tempsummary', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'acode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sumamount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'senha': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '?Ë]¹',
      comment: "null"
    }
  }, {
    tableName: 'tempsummary'
  });
};
