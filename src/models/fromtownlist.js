/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('fromtownlist', {        
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
        }

    }, {
      tableName : 'fromtownlist'
    });
  };