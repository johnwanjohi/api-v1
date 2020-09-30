/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pickuppoints', {
    'openbookref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'pickuppoint': {
      type: DataTypes.CHAR(50),
      allowNull: true,
      comment: "null"
    },
    'pickuptime': {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'pickuppoints'
  });
};
