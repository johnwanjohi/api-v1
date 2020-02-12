/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblcustomers', {
    'customerid': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'customername': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'contactperson': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'department': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'telephone': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customerfax': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customeremail': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customertown': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'customercountry': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'cust_sup_typeidf': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'customer_categoryidf': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'tblcustomers'
  });
};
