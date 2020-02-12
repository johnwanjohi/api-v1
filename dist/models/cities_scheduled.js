'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  /*
  `open_booking`.`ref`        AS `openbookingid`,
  `open_booking`.`ref`        AS `scheduledbusid`,
  CAST(`open_booking`.`bookdate` AS CHAR CHARSET utf8) AS `bookdate`,
  `open_booking`.`booktime`   AS `booktime`,
  `open_booking`.`reporttime` AS `reporttime`,
  `bfare`.`fdestination`      AS `fromtown`,
  `bfare`.`tdestination`      AS `totown`,
  `bfare`.`bfare`             AS `bfare`,
  COALESCE(`tbltrucks`.`no_of_seats`,`open_booking`.`bus_number`) AS `no_of_seats`,
  `open_booking`.`routecode`  AS `routecode`
  */
  return sequelize.define('cities_scheduled', {
    'openbookingid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'scheduledbusid': {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    'bookdate': {
      type: DataTypes.STRING(256)
    },
    'booktime': {
      type: DataTypes.STRING(256),
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(256),
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(256),
      comment: "null"
    },
    'bfare': {
      type: DataTypes.STRING(256),
      comment: "null"
    },
    'no_of_seats': {
      type: DataTypes.STRING(256),
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(256),
      comment: "null"
    }
  }, {
    tableName: 'cities_scheduled'
  });
};