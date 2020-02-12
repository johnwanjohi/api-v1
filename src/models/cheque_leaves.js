/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque_leaves', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'bank': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cheque_no': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'cheque_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cheque_leaves'
  });
};
