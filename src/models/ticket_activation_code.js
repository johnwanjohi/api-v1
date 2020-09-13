/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket_activation_code', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'seatno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ticket_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'ticket_activation_code'
  });
};
