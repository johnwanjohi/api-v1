/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_rights_temp_archived', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'user_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'temprighttime': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'temprightname': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'isactive': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    }
  }, {
    tableName: 'user_rights_temp_archived'
  });
};
