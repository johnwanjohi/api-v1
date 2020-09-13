/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waybill_info_dispatch', {
    'ref': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    'waybill_info_ref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'date': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'dispatchedto': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'idtype': {
      type: DataTypes.ENUM('ID','PASSPORT'),
      allowNull: true,
      comment: "null"
    },
    'idnumber': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nationality': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobilenumber': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'qtydispatched': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'comment': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'CURRENT_TIMESTAMP',
      comment: "null"
    },
    'edittedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'waybill_info_dispatch'
  });
};
