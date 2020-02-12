'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('ticketing_copy', {
    't_route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'booktime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_idno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'seatno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'transdate': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ticketno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'ticketcount': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ticketstatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'redeemed': {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'redeemed_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'redeemed_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'cancelled_by': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cancel_reason': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'cancel_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'voucherno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'pick_point': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'children': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'childrennames': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'discount_type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'crownid': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    't_currency': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'soldtdte': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'bus_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bus_number': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nationality': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'first_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'first_printby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'second_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'second_printby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'm_pesa_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ticket_direction': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'exchange_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'manual_bookno': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'manual_serial_no': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'entry_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'isposted': {
      type: DataTypes.ENUM('N', 'Y'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'date_posted': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'voucher_after_redeeming': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'ticketing_copy'
  });
};