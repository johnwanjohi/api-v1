/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstockcarddetails', {
    'stockcarddetailsid': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'stockcardidf': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'date_issued_received': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'received_issued': {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '1',
      comment: "1 = received"
    },
    'from_to': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'qty': {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '1',
      comment: "null"
    },
    'ref': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'job': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'price': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'authorisedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lastedited_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_edited': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'grn': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lpo': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'km': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'serial_no': {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tblstockcarddetails'
  });
};
