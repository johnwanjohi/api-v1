/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobile_ip', {
    'ip': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'use_online_api': {
      type: DataTypes.ENUM('True','False'),
      allowNull: true,
      defaultValue: 'True',
      comment: "null"
    },
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    }
  }, {
    tableName: 'mobile_ip'
  });
};
