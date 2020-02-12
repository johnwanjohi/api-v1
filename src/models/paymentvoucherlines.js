/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentvoucherlines', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'paymentvoucherref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: false,
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
    tableName: 'paymentvoucherlines'
  });
};
