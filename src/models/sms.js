/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'phone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'smscenter': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'received_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'read': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'isshortcode': {
      type: DataTypes.ENUM('Y','N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    }
  }, {
    tableName: 'sms'
  });
};
