/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uccaduser_logs', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'IdUser_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'query_type': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'query': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updatedon': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'uccaduser_logs'
  });
};
