/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userroles', {
    'userroleid': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'iduser': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'role': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'userroles'
  });
};
