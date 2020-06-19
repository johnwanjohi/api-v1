/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountset', {
    'code': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'glcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TYPE': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'DR',
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'active',
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'category': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'category_old': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'hq_only': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'controlling_account': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'is_workshop': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'dateedited': {
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
    'is_for_approval': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'isbankaccount': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'bank_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bank_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'branch_name': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'account_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'currency': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'exchangerate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'isactive': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'accountset'
  });
};
