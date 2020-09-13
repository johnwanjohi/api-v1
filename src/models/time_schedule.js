/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_schedule', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'table_date': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'morning_1': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'morning_1_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'morning_2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'morning_2_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'morning_3': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'morning_3_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'morning_4': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'morning_4_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'morning_5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'morning_5_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'evening_1': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'evening_1_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'evening_2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'evening_2_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'evening_3': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'evening_3_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'evening_4': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'evening_4_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'evening_5': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'evening_5_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'night_duty': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'night_duty_time': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'edited_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'time_schedule'
  });
};
