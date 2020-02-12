/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requisition', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'qty': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'unit_price': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supplier': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'item_name': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'paid_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'invoice_no': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'suppliername': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updatedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateupdated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'requisitiontype': {
      type: DataTypes.ENUM('EXPENSE','INVENTORY'),
      allowNull: true,
      comment: "null"
    },
    'approved': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateapproved': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'requisition'
  });
};
