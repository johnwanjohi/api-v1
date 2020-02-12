/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblunitofmeasure', {
    'unitofmeasureid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'unitofmeasure': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'unitofmeasure_desc': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    }
  }, {
    tableName: 'tblunitofmeasure'
  });
};
