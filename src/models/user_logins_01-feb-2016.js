/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_logins_01-feb-2016', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_login': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'ip': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'time_loggedin': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'user_logins_01-feb-2016'
  });
};
