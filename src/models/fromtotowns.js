/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('fromtotowns', {
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
        'reporttime': {
            type: DataTypes.STRING(256),
            comment: "null"
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
        tableName: 'fromtotowns'
    });
};