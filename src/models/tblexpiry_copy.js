/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblexpiry_copy', {
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'insexpiry': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'inspectionexpiry': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'speedgovernor': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'tlb': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'musiccopyright': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblexpiry_copy'
  });
};
