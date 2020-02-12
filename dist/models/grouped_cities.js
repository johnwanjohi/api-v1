'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    var _openbookingid;

    return sequelize.define('grouped_cities', {
        'openbookingid': (_openbookingid = {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        }, _defineProperty(_openbookingid, 'primaryKey', true), _defineProperty(_openbookingid, 'comment', "null"), _defineProperty(_openbookingid, 'autoIncrement', true), _openbookingid),
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
    }, {
        tableName: 'grouped_cities'
    });
};