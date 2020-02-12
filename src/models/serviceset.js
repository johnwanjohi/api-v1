/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serviceset', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'serviceset'
  });
};
