/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bfare', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'fcode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bustype': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'sclass': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'fdestination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'tdestination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bfare': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'bfareug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'bfaretz': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true,
      defaultValue: 'Active',
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
    'startdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'enddate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bfare'
  });
};
