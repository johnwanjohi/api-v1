/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('journal_entry', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'journal_number': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'journal_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'account_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'account_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'debit_amount': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'credit_amount': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'credit_amountug': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'debit_amountug': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'entered_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'journal_description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'ref_ticket': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'pettycash_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(50),
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
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'currency': {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'KES',
      comment: "null"
    },
    'exchangerate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'convertedamount': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'isopeningbalance': {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: true,
      defaultValue: 'NO',
      comment: "null"
    },
    'transactiontype': {
      type: DataTypes.ENUM('CREDIT','DEBIT'),
      allowNull: true,
      comment: "null"
    },
    'category': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'journal_entry'
  });
};
