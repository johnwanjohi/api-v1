/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_setup', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bank_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bank_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'branch_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'account_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'deposit_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'deposit_start_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'deposit_end_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'deposit_installment': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'isactive': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
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
    }
  }, {
    tableName: 'bank_setup'
  });
};
