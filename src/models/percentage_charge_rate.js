/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('percentage_charge_rate', {
    'percentage_charge_rate': {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'percentage_charge_rate'
  });
};
