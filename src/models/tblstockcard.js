/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockcard', {
    'stockcardid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'stockitemidf': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'location': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'minimun_qty': {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'tblstockcard'
  });
};
