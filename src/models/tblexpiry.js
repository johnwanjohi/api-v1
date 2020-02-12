/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblexpiry', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'expiry_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'expiry_name': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'expiry_date': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_update': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sms_sent': {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: true,
      defaultValue: 'NO',
      comment: "null"
    },
    'sms_datesent': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblexpiry'
  });
};
