/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'sname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'postcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'town': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'mobile': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'vatno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'suppliers'
  });
};
