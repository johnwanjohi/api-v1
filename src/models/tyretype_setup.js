/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tyretype_setup', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'code': {
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
    }
  }, {
    tableName: 'tyretype_setup'
  });
};
