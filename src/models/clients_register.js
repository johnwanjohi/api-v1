/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clients_register', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'client_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'client_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'pin_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'company_regno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'postal_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'town': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'work_phone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fax': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobile1': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobile2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'contact_person': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'email_addr': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'physical_addr': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'trade': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'notes': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Not Active'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'reg_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'is_milk_account': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "null"
    },
    'limitamount': {
      type: DataTypes.DECIMAL,
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
    }
  }, {
    tableName: 'clients_register'
  });
};
