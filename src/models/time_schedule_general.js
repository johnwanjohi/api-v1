/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_schedule_general', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'IdUser': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'login': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
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
    'monday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'tuesday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'wednesday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'thursday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'friday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'saturday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'sunday': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'time_schedule_general'
  });
};
