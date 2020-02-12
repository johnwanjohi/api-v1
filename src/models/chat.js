/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'from_user': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'to_user': {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'message': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'sent': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00',
      comment: "null"
    },
    'recd': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'to_cc': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'to_user_cc': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'initially_sent_to': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'attachment': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'chat'
  });
};
