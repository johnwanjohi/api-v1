/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countriesn', {
    'num_code': {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
      comment: "null"
    },
    'alpha_2_code': {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'alpha_3_code': {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'en_short_name': {
      type: DataTypes.STRING(52),
      allowNull: true,
      comment: "null"
    },
    'nationality': {
      type: DataTypes.STRING(39),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'countriesn'
  });
};
