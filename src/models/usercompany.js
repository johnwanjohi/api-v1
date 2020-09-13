/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usercompany', {
    'createdAt': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'updatedAt': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'CompanyId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'UserId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'usercompany'
  });
};
