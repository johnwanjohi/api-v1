/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'email': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    },
    'password': {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'users'
  });
};
