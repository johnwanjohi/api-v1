/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('grouped_cities', {        
        'openbookingid': {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        'fromtown': {
            type: DataTypes.STRING(256),
            allowNull: false,
            comment: "null"
        },
        'totown': {
            type: DataTypes.STRING(256),
            allowNull: false,
            comment: "null"
        }
        ,
        'bookdate': {
            type: DataTypes.STRING(256),
            allowNull: false,
            comment: "null"
        }
    }, {
      tableName : 'grouped_cities'
    });
  };