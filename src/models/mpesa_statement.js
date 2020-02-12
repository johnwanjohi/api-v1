/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpesa_statement', {
    '4': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    '6': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    '8': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    '9': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'id': {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'receipt': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'time': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'phonenumber': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'note': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'mpesa_statement'
  });
};
