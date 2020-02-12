/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uccadperm', {
    'IdUser': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'Modulo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ObjName': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'uccadperm'
  });
};
