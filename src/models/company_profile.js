/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_profile', {
    'company_name': {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'telephone1': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'telephone2': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fax': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'address': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'contact_person': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'contact_person_email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'contact_person_tel': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'contact_person_mobile': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'pin_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'vat_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'logo': {
      type: "BLOB",
      allowNull: true,
      comment: "null"
    },
    'tdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'motto': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'c_year': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '2010',
      comment: "null"
    }
  }, {
    tableName: 'company_profile'
  });
};
