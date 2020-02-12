/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesapi_account', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'type': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'identifier': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'push_in': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'push_out': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'push_neutral': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    },
    'settings': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'pesapi_account'
  });
};
