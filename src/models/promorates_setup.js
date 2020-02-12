/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promorates_setup', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    't_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'promo_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'calc_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'promo_ratestudent': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'calc_ratestudent': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'promorates_setup'
  });
};
