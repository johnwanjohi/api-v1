/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbltimeunits', {
    'timeunitid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'timeunit': {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tbltimeunits'
  });
};
