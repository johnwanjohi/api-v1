/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbltrucks_assigned_drivers', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'tbltrucks_refno': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'drivers_refno': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'assigned_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tbltrucks_assigned_drivers'
  });
};
