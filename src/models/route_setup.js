/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('route_setup', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'code': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'reporttime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimekkg': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimekkg': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimecvk': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimecvk': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimembl': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimembl': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimeksm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimeksm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimemlb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimemlb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimebgm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimebgm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimeeld': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimeeld': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimebsa': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimebsa': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimeest': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimeest': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimenrb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimenrb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimekpl': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimekpl': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimejnj': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimejnj': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimemblug': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimemblug': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimedrm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimedrm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimeakb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimeakb': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimemav': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimemav': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimemty': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimemty': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttimebnd': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'booktimebnd': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bus_number': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lastupdate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'cancelled_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cancel_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'createdate': {
      type: DataTypes.DATE,
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
    'noofseats': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'route_setup'
  });
};
