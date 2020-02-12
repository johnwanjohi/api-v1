/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manual_books', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'book_no': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null",
      unique: true
    },
    'serial_from': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'serial_to': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'closed': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'date_closed': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'date_given_out': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'book_user': {
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
    tableName: 'manual_books'
  });
};
