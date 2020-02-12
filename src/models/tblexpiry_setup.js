/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblexpiry_setup', {
    'ref': {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'expiry_name': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'notification_days': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '5',
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'edited_by': {
      type: "VARBINARY(50)",
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblexpiry_setup'
  });
};
