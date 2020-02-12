/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesapi_payment22mar16', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'account_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'super_type': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'type': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'receipt': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'time': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'phonenumber': {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'account': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'status': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'amount': {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "null"
    },
    'post_balance': {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "null"
    },
    'note': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'transaction_cost': {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "null"
    },
    'syncdate': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'pesapi_payment22mar16'
  });
};
