/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentvoucher', {
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'DATE': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'datepaid': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'comment': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'voucherno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'paidto': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'memo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'modeofpayment': {
      type: DataTypes.ENUM('CASH','CHEQUE','TRANSFER','MOBILE MONEY'),
      allowNull: true,
      comment: "null"
    },
    'authorisedby': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'approved': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'approvedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'SYSTEM',
      comment: "null"
    },
    'dateapproved': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'receivedby': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: false,
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
      comment: "null"
    },
    'chequerefno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'supportingdoc': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'currency': {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'KES',
      comment: "null"
    }
  }, {
    tableName: 'paymentvoucher'
  });
};
