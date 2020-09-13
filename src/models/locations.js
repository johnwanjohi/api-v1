/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'code': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('ACTIVE','DISABLED'),
      allowNull: true,
      defaultValue: 'ACTIVE',
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
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'is_hq': {
      type: DataTypes.ENUM('No','Yes'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'is_workshop': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'isparking': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    }
  }, {
    tableName: 'locations'
  });
};
