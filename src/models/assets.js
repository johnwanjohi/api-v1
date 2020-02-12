/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assets', {
    'refno': {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'brand': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'model': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'serialno': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'purchasevalue': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'purchasedate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'currentvalue': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'location': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'responsibleperson': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
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
    }
  }, {
    tableName: 'assets'
  });
};
