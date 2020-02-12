'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _id;

  return sequelize.define('pesapi_payment', {
    'id': (_id = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_id, 'primaryKey', true), _defineProperty(_id, 'comment', "null"), _defineProperty(_id, 'autoIncrement', true), _id),
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
    tableName: 'pesapi_payment'
  });
};