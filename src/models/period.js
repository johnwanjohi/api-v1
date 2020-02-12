/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('period', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'period': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'start_date': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'end_date': {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
    'updated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updated_on': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'isclosed': {
      type: DataTypes.ENUM('Y','N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'date_closed': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'closed_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'period'
  });
};
