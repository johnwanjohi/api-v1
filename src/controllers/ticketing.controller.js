import api from '../tools/common';
import db from '../config/sequelize';

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
async function reserveSeats(req, res, next) {

    const sequelize = db.sequelize;
    console.dir('Reserving a seat');
    var _data = req.body;
    // console.dir(_data);
    var ds = sequelize; // Ticketing.dataSource;
    // onsole.dir(ds);
    var dsReserve = sequelize;
    console.log('ticketing connected datasource');
    var cstrParam = _data;
    var searchQuery = ' where 1=1 ';
    var seatno, clientname, mobileno, amount, fromtown, totown, bookdate,
        booktime, reporttime, pick_point, openbookref, nationality, t_idno, residence, paymentBillo;
    var errorFound = false;
    var errorString = [];
    var errorFoundArray;
    if (typeof(_data) === Array || typeof(_data) === 'object') {
        for (var i = 0; i < _data.length; i++) {
            console.log("ticket==" + i);
            cstrParam = _data[i];
            errorFoundArray = await validate(cstrParam);
            if (errorFoundArray.errorFound) {
                errorFound == true;
                errorString.push(...errorFoundArray.errorString);
            }
        }
    } else {
        console.log("its not array " + typeof(_data) + " -- " + _data.prop);
        errorFound = true;
        errorString.push('Wrong Data formart.');
    }
    errorFound = errorFoundArray.errorFound;
    if (errorFound == true) {
        api.error(res, 'Error ' + errorString, 500);
    }
    if (errorFound == false) {
        console.log("nimefika" + errorFound);
        let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
        let apiuniqueid = [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');

        const BillRefNumber = await sequelize.query("select (count(*) + 1) as BillRefNumber from `mobile_payments`", {
            type: sequelize.QueryTypes.SELECT
        });
        let billrefno = _data[0].openbookref + "-" + BillRefNumber[0].BillRefNumber;
        var t_username = "ONLINEBOOKING";
        var sub_station = "WEBSITE-CROWN";
        var insert_values = "";
        var insert_verify = "";
        var searchOpenBookRef = "";
        var searchSeatNo = "";
        for (var i = 0; i < _data.length; i++) {
            console.log("ticket==" + i);
            console.dir(_data[i]);
            cstrParam = _data[i];
            let newInsert = "('" + sub_station + "','" + apiuniqueid + "','RESERVED','" + _data[i].seatno + "','" + _data[i].clientname + "','" + _data[i].t_idno + "','" +
                _data[i].mobileno + "','" + _data[i].amount + "','" + _data[i].fromtown + "','" + _data[i].totown + "','" + _data[i].bookdate + "','" + _data[i].booktime + "','" + _data[i].reporttime + "','" +
                _data[i].pick_point + "','" + _data[i].openbookref + "','" + _data[i].nationality + "','" + t_username + "','" + _data[i].residence + "','" + billrefno + "')";
            if (insert_values != "") {
                insert_values += "," + newInsert;
                searchOpenBookRef += "," + _data[i].openbookref;
                searchSeatNo += ",'" + _data[i].seatno + "'";
            } else {
                insert_values += newInsert;
                searchOpenBookRef += _data[i].openbookref;
                searchSeatNo += "'" + _data[i].seatno + "'";
            }
        }
        var insert_fields = "sub_station,apiuniqueid,`ticketstatus`,seatno, clientname, t_idno, mobileno, amount, fromtown, totown, bookdate, booktime, reporttime, pick_point, openbookref, nationality,t_username,residence,billrefno";
        var sqlReserveSeat = "INSERT IGNORE INTO ticketing (" + insert_fields + ") VALUES  " + insert_values + ";";
        var sqlAlreadyReserved = `select count(*) as bookedreserved from ticketing where ticketstatus  in  ('active','locked','reserved') and seatno in (${searchSeatNo})  and openbookref in (${searchOpenBookRef})`;
        console.dir(sqlAlreadyReserved);
        const isBookedOrReserved = await sequelize.query(sqlAlreadyReserved, {
            type: sequelize.QueryTypes.SELECT
        });
        console.log(JSON.stringify(isBookedOrReserved[0], null, 2));
        console.log(isBookedOrReserved[0].bookedreserved);
        if (isBookedOrReserved[0].bookedreserved == 0) {
            dsReserve.query(sqlReserveSeat, {
                type: sequelize.QueryTypes.INSERT
            }).then((data) => {
                var return_fields = "new_ref as serialno,apiuniqueid,`ticketstatus`,seatno, clientname, t_idno, mobileno, amount, fromtown, totown, CAST(`bookdate` AS CHAR CHARSET utf8) AS `bookdate` , booktime, reporttime, pick_point, openbookref, nationality,residence,billrefno";
                var query = "SELECT " + return_fields + " from ticketing where apiuniqueid = '" + apiuniqueid + "';";
                ds.query(query, {
                    type: sequelize.QueryTypes.SELECT
                }).then((data) => {
                    api.ok(res, data);
                }).catch((e) => {
                    api.error(res, 'Error ' + e, 500);
                });
            }).catch((e) => {
                api.error(res, 'Error ' + e, 500);
            });
        } else {
            api.error(res, 'Error ' + "Seats already booked, locked or reserved", 500);
        }
    }
}
async function validateMpesa(mpesacode, amount) {
    const sequelize = db.sequelize;
    let mpesaOkay = false;

}
async function bookSeats(req, res, next) {
    const sequelize = db.sequelize;
    console.dir('Booking a seat');
    var _datax = req.body;
    var _data = req.body;
    console.dir(_data);
    var ds = sequelize; // Ticketing.dataSource; ----->>
    // onsole.dir(ds);
    var dsReserve = sequelize;
    console.log('ticketing connected datasource');
    var cstrParam = _data;
    var searchQuery = ' where 1=1 ';
    var seatno, clientname, mobileno, amount, fromtown, totown, bookdate,
        booktime, reporttime, pick_point, openbookref, nationality, t_idno, residence, paymentBillo, apiuniqueid, m_pesa_code, mpesamobileno, routecode;
    var errorFound = false;
    var errorString = [];
    var errorFoundArray;
    console.dir(_datax.AccountReference);
    apiuniqueid = _datax.TransactionDesc;
    m_pesa_code = _datax.m_pesa_code;
    mpesamobileno = _datax.mobileno;
    routecode = _datax.routecode;
    _data = await sequelize.query(`select *  from ticketing where apiuniqueid = '${apiuniqueid}' and  billrefno = '${_datax.AccountReference}'`, {
        type: sequelize.QueryTypes.SELECT
    });
    if (typeof(_data) === Array || typeof(_data) === 'object') {
        console.log("its array");
        console.dir(_data.tickets);
        for (var i = 0; i < _data.length; i++) {
            console.log("ticket==" + i);
            cstrParam = _data[i];
            errorFoundArray = await validate(cstrParam);
            if (errorFoundArray.errorFound) {
                errorFound == true;
                errorString.push(...errorFoundArray.errorString);
            }
        }
    } else {
        console.log("its not array " + typeof(_data) + " -- " + _data.prop);
        errorFound = true;
        errorString.push('Wrong Data formart.');
    }
    if (errorFoundArray.errorFound) {
        errorFound = errorFoundArray.errorFound;
    }
    if (errorFound == true) {
        api.error(res, 'Error ' + errorString, 500);
    }
    const BillRefNumber = await sequelize.query("select (count(*) + 1) as BillRefNumber from `mobile_payments`", {
        type: sequelize.QueryTypes.SELECT
    });
    const mpesaMobileOwner = await sequelize.query(`select  FirstName as mpesaownername from mobile_payments where MSISDN ='${mpesamobileno}' limit 1`, {
        type: sequelize.QueryTypes.SELECT
    });
    let mpesaownername = mpesaMobileOwner[0].mpesaownername;
    if (errorFound == false) {
        console.log("nimefika ticketing" + errorFound);
        let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
        var t_username = "ONLINEBOOKING";
        var sub_station = "WEBSITE-CROWN";
        var insert_values = "";
        var insert_verify = "";
        var searchOpenBookRef = "";
        var searchSeatNo = "";
        for (var i = 0; i < _data.length; i++) {
            console.log("ticket==" + i);
            console.dir(_data[i]);
            cstrParam = _data[i];
            let newInsert = `('${routecode}','${mpesamobileno}', '${sub_station}', '${apiuniqueid}', 'ACTIVE', '${_data[i].seatno}', '${_data[i].clientname}', '${_data[i].t_idno}', '${_data[i].mobileno}',
                '${_data[i].amount}', '${_data[i].fromtown}', '${_data[i].totown}', '${_data[i].bookdate}', '${_data[i].booktime}', '${_data[i].reporttime}', '${_data[i].pick_point}',
                '${_data[i].openbookref}', '${_data[i].nationality}', '${_data[i].t_username}', '${_data[i].residence}', '${_data[i].billrefno}', '${m_pesa_code}', 'MPESA')`;
            if (insert_values != "") {
                insert_values += "," + newInsert;
                searchOpenBookRef += "," + _data[i].openbookref;
                searchSeatNo += ",'" + _data[i].seatno + "'";
            } else {
                insert_values += newInsert;
                searchOpenBookRef += _data[i].openbookref;
                searchSeatNo += "'" + _data[i].seatno + "'";
            }
        }
        var insert_fields = `t_route,mpesamobileno, sub_station, apiuniqueid, ticketstatus, seatno, clientname, t_idno, mobileno,
            amount, fromtown, totown, bookdate, booktime, reporttime, pick_point, openbookref, nationality, t_username, residence, billrefno, m_pesa_code, payment_mode `;
        var sqlBookSeat = `
            INSERT IGNORE INTO ticketing(${insert_fields}) VALUES ${ insert_values };
            `;
        var sqlAlreadyReserved = `
            select count( * ) as bookedreserved from ticketing where ticketstatus in ('active', 'locked') and seatno in (${ searchSeatNo}) and openbookref in (${ searchOpenBookRef })
            `;
        console.dir(sqlAlreadyReserved);
        const isBookedOrReserved = await sequelize.query(sqlAlreadyReserved, {
            type: sequelize.QueryTypes.SELECT
        });
        console.log(JSON.stringify(isBookedOrReserved[0], null, 2));
        console.log(isBookedOrReserved[0].bookedreserved);
        if (isBookedOrReserved[0].bookedreserved == 0) {
            dsReserve.query(sqlBookSeat, {
                type: sequelize.QueryTypes.INSERT
            }).then((data) => {
                var return_fields = `
            new_ref as serialno, apiuniqueid,
            ticketstatus,
            seatno, clientname, t_idno, mobileno, amount, fromtown, totown, CAST(bookdate AS CHAR CHARSET utf8) AS bookdate,
            booktime, reporttime, pick_point, openbookref, nationality, residence, billrefno `;
                var query = "SELECT " + return_fields + " from ticketing where openbookref in (" + searchOpenBookRef + ") and ticketstatus in ('active') and apiuniqueid = '" + apiuniqueid + "';";
                ds.query(query, {
                    type: sequelize.QueryTypes.SELECT
                }).then((data) => {
                    // cancel reserved seats
                    var sqlResevedSeatsCancel = "update ticketing SET cancel_reason = 'Was online reservation and then automatically cancelled by the API after payment conformation', cancel_date=now(), cancelled_by = '" + t_username +
                        "', ticketstatus = 'CANCELLED' where openbookref in (" + searchOpenBookRef + ") and ticketstatus in ('reserved') and apiuniqueid = '" + apiuniqueid + "';";
                    sequelize.query(sqlResevedSeatsCancel, {
                        type: sequelize.QueryTypes.UPDATE
                    });
                    _data = data;
                    let smsMessageTicket = '';
                    let smsMobileNo = mpesamobileno;
                    for (var i = 0; i < data.length; i++) {
                        /**
                         * Ticket details:- Ticket-3016206 Seat-4L. Date-2020-08-27. Time-07:00AM. Boarding-(MUMIAS). Show this sms when boarding. STOP*456*9*5#
                         */
                        smsMessageTicket = routecode + "\nTicketNo-" + _data[i].serialno + "\nSeat-" + _data[i].seatno +
                            "\nDate-" + _data[i].bookdate + ".\nTime-" + _data[i].reporttime + ".\nBoarding-" + _data[i].pick_point + "\n";
                        let textMessa = api.sendSMS(_data[i].mobileno, "Thank you for choosing crownbus services:-\n" +
                            smsMessageTicket + "Show this sms when boarding");
                    }
                    console.log(smsMessageTicket)
                        /*
                            api.sendSMS(smsMobileNo, "Dear " + mpesaownername + ",\nThank you for choosing crownbus services; your ticket number(s) is/are\n" +
                            smsMessageTicket + "Please visit any crownbus office and show this message to get printed ticket(s).")
                        */
                    api.ok(res, data);
                }).catch((error) => {
                    api.error(res, 'Error ' + error, 500);
                });
            }).catch((e) => {
                api.error(res, 'Error ' + e, 500);
            });
        } else {
            api.error(res, 'Error ' + "Seats already booked, locked or reserved", 500);
        }
    }
}
module.exports = {
    reserveSeats,
    bookSeats
};