/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemset', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'productcode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reorder': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'itemset'
  });
};
