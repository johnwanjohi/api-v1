/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_t', {
    'country_id': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'iso2': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'long_name': {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'iso3': {
      type: DataTypes.CHAR(3),
      allowNull: true,
      comment: "null"
    },
    'numcode': {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "null"
    },
    'un_member': {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "null"
    },
    'calling_code': {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "null"
    },
    'cctld': {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'country_t'
  });
};
