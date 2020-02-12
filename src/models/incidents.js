/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incidents', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'incdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'driver': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'conductor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'incident': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'actiontaken': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'document_status': {
      type: DataTypes.ENUM('Draft','Published','Cancelled'),
      allowNull: true,
      defaultValue: 'Draft',
      comment: "null"
    },
    'document_status_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'incidents'
  });
};
