// var mpesalink = 'https://crownbus-ea.com/mobile_payment/api_pay_live/secure/lnmo.php';import api from '../tools/common';
import api from '../tools/common';
import db from '../config/sequelize';
import moment from 'moment';

var request = require('request');
var mpesalink = 'https://crownbus-ea.com/mobile_payment/api_pay_live/secure/lnmo.php';

function validate(cstrParam) {
    var errorFound = false;
    var errorString = [];
    var seatno, clientname, mobileno, amount, fromtown, totown, bookdate,
        booktime, reporttime, pick_point, openbookref, nationality, t_idno, residence;
    console.log('valiadtion function ');
    console.dir(cstrParam);
    if (cstrParam.openbookref) {
        openbookref = cstrParam.openbookref;
        // check if bus is already booked/reserved
    } else {
        errorFound = true;
        // errorString = errorString + "Bus not selected.\n";
        errorString.push('Bus not selected.`openbookref`');
    }
    if (cstrParam.seatno) {
        seatno = cstrParam.seatno;
    } else {
        errorFound = true;
        errorString.push('Seat number is required.`seatno`');
    }
    if (cstrParam.residence != undefined) {
        residence = cstrParam.residence;
    } else {
        errorFound = true;
        errorString.push('Residence is required.`residence`');
    }
    if (cstrParam.pick_point != undefined) {
        pick_point = cstrParam.pick_point;
    } else {
        errorFound = true;
        errorString.push('Boarding point is required.`pick_point`');
    }
    if (cstrParam.booktime != undefined) {
        booktime = cstrParam.booktime;
    } else {
        errorFound = true;
        errorString.push('Departure time is required.`booktime`');
    }
    if (cstrParam.reporttime != undefined) {
        reporttime = cstrParam.reporttime;
    } else {
        errorFound = true;
        errorString.push('Report time is required.`reporttime`');
    }
    if (cstrParam.bookdate != undefined) {
        bookdate = cstrParam.bookdate;
    } else {
        errorFound = true;
        errorString.push('Booking date is required.`bookdate`');
    }
    if (cstrParam.clientname != undefined) {
        clientname = cstrParam.clientname;
    } else {
        errorFound = true;
        errorString.push("Traveler's name is required.`clientname`");
    }
    if (cstrParam.amount != undefined) {
        amount = cstrParam.amount;
    } else {
        errorFound = true;
        errorString.push('Busfare is required.`amount`');
    }
    if (cstrParam.fromtown != undefined) {
        fromtown = cstrParam.fromtown;
    } else {
        errorFound = true;
        errorString.push('Departure town is required.`fromtown`');
    }
    if (cstrParam.totown != undefined) {
        totown = cstrParam.totown;
    } else {
        errorFound = true;
        errorString.push('Destination town is required.`totown`');
    }
    if (cstrParam.t_idno != undefined) {
        t_idno = cstrParam.t_idno;
    } else {
        errorFound = true;
        errorString.push("Traveler's ID/Passport Number is required.`t_idno`");
    }
    if (cstrParam.mobileno != undefined) {
        mobileno = cstrParam.mobileno;
    } else {
        errorFound = true;
        errorString.push("Traveler's mobile number is required.`mobileno`");
    }
    if (cstrParam.nationality != undefined) {
        nationality = cstrParam.nationality;
    } else {
        errorFound = true;
        errorString.push("Nationality is required.`nationality`");
    }
    return { errorFound, errorString };
}

async function gettransactioncode(req, res, next) {
    const sequelize = db.sequelize;
    console.dir('getting transation code');
    var _data = req.body;

    console.log('ticketing connected datasource');
    var cstrParam = _data;

    var errorFound = false;
    var errorString = [];
    var errorFoundArray;
    if (typeof(_data) === Array || typeof(_data) === 'object') {
        // console.log("its array");
        // console.dir(_data.tickets);

    } else {
        console.log("its not array " + typeof(_data) + " -- " + _data.prop);
        errorFound = true;
        errorString.push('Wrong Data formart.');
    }
    // errorFound = errorFoundArray.errorFound;
    if (errorFound == true) {
        api.error(res, 'Error ' + errorString, 500);
    }
    if (errorFound == false) {
        let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
        let apiuniqueid = [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');
        var t_username = "ONLINEBOOKING";
        var sub_station = "WEBSITE-CROWN";
        var insert_values = "";
        var insert_verify = "";
        var searchOpenBookRef = "";
        var searchSeatNo = "";

        // body: `mobileno=${_data.mobileno}&AccountReference=${_data.AccountReference}&TransactionDesc=${_data.TransactionDesc}&amount=1`,
        var sqlgetmpesacode = `select *  from mobile_payments where BillRefNumber  in  ('${_data.AccountReference}') and MSISDN in ('${_data.mobileno}')`;
        console.dir(sqlgetmpesacode);
        const isTransactionSuccessiful = await sequelize.query(sqlgetmpesacode, {
            type: sequelize.QueryTypes.SELECT
        }).then((data) => {
            api.ok(res, data);
        }).catch((e) => {
            api.error(res, 'Error ' + e, 500);
        });
        // console.log(JSON.stringify(isTransactionSuccessiful, null, 2));
    }
}

async function stkPush(req, res, next) {
    // const sendSms = await api.sendSMS('0722104385', 'test message');
    // console.dir(sendSms);
    var _data = req.body;
    // const date = new Date();
    // var mpesa_timestamp = moment().toDate().format('YYYY-MM-DD');
    var mpesa_timestamp = moment().format('YmdHis');
    console.dir(_data);
    console.log("formatted date " + mpesa_timestamp);
    let stkpush = await request.post({
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: mpesalink,
            method: 'POST',
            body: `mobileno=${_data.mobileno}&AccountReference=${_data.AccountReference}&TransactionDesc=${_data.TransactionDesc}&amount=${_data.amount}`,
            // body: `mobileno=${_data.mobileno}&AccountReference=${_data.AccountReference}&TransactionDesc=${_data.TransactionDesc}&amount=1`,
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.dir(body);
                api.ok(res, body);
            }
            if (error) {
                console.dir(error);
                api.error(res, 'Error ' + error, 500);
            }
        }
    );
    // console.dir(stkpush);
}
module.exports = {
    stkPush,
    gettransactioncode
};