/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountset_backup', {
    'code': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'glcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TYPE': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'DR',
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'active',
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'category': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'accountset_backup'
  });
};
