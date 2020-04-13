/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('totownlist', {        
        'id': {
            type: DataTypes.STRING(256),
            allowNull: false,
            primaryKey: true,            
            comment: "null"            
        },
        'text': {
            type: DataTypes.STRING(256),
            allowNull: false,
            primaryKey: true,            
            comment: "null"            
        },
        'bookdate': {
            type: DataTypes.STRING(256),
            allowNull: false,
            primaryKey: true,            
            comment: "null"            
        },
        'fromtown': {
            type: DataTypes.STRING(256),            
            comment: "null"
        }
    }, {
      tableName : 'totownlist'
    });
  };