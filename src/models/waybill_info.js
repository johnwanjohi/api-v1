/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waybill_info', {
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'trans_date': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'consignor': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'consignee': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_destination': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'r_telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'pay_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'vatable': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Yes',
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'weight': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'pkg_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cbm': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    's_telephone': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'loaded': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Loaded',
      comment: "null"
    },
    'loadingsheetno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'loadsheetref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'loaded_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'vat_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00',
      comment: "null"
    },
    'cod_paid': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Paid',
      comment: "null"
    },
    'cod_paydate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'cod_receiver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cod_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cod_substation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_received': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Received',
      comment: "null"
    },
    'waybill_receivedby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedcondition': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_receivedsubstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_delivered': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Delivered',
      comment: "null"
    },
    'waybill_deliveredate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredto': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredtoid': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredtomobile': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredsubstation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'waybill_deliveredby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'waybill_status': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'cancel_reason': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'cancelled_by': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'newwaybillno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'tr_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'account_paid': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Not Paid',
      comment: "null"
    },
    'account_paydate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'account_receiver': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'account_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'account_substation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'vat_amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    't_currency': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'KSHS',
      comment: "null"
    },
    'sys_uniq_ref': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'is_consignee_pass': {
      type: DataTypes.ENUM('Y','N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'p_ticketno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'cancel_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'mpesa_trans_code': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'is_missing': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'time_of_entry': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sms_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ontransit': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'final_destination': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'office_to_office': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'mpesa_authorised': {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: true,
      comment: "null"
    },
    'mpesa_authorised_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mpesa_authorised_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'loaded_quantity': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'scanned': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'scanned_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'scanned_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'current_sub_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateupdated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updatedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'update_t_destination_reason': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'createdby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'cargo_manifest': {
      type: DataTypes.ENUM('No','Yes'),
      allowNull: true,
      defaultValue: 'No',
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
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'waybill_info'
  });
};
