/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_sent', {
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
    'text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'sent_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'user_sms': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    }
  }, {
    tableName: 'sms_sent'
  });
};
