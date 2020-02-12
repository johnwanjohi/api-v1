/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('constants', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'constant_name': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'value': {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.0035',
      comment: "null"
    }
  }, {
    tableName: 'constants'
  });
};
