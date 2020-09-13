/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockcategories', {
    'stockcategoryid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'stockcategory': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'stockcategorycode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'inventorytype': {
      type: DataTypes.ENUM('OFFICE','WORKSHOP'),
      allowNull: true,
      defaultValue: 'WORKSHOP',
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcategories'
  });
};
