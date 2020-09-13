/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workbook', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'workdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'garage': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'millage': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'cost': {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00000',
      comment: "null"
    },
    'notes': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'servicetype': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nextservice': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'jobcard': {
      type: DataTypes.STRING(50),
      allowNull: true,
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
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Completed','UnCompleted','WaitingItemIssue'),
      allowNull: true,
      defaultValue: 'UnCompleted',
      comment: "null"
    },
    'date_statuschange': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'status_changed_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'workbook'
  });
};
