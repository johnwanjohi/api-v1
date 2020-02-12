/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coprofile', {
    'companyname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'pbox': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fax': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'tdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    }
  }, {
    tableName: 'coprofile'
  });
};
