const querystringConverter = require('sequelize-querystring-converter');
var expect = require('chai').expect;
var Transport = require('bipsms');

function ok(res, data) {      
    return res.status(200).json({ status: true, 'data': data });
}
function error(res, message, code) {   
    return res.status(code).json({ 'status': false, 'data': { 'message': message } });
}

function genQueryParameters(req, excludeFields, group) {
    /*
        ## Features
        * Pagination using limit and offset query parameters
        * Multi-Column Sort
        * Filtering with operator support (currently supported: and, or, lt, lte, gt, gte, ne, eq, not, 
        * between, notBetween, in, notIn, startsWith, endsWith, and substring)
        ## Usage
        ```javascript
        const queryStringConverter = require('sequelize-querystring-converter');
        const obj = queryStringConverter.convert({
        query: {
            category: 'Shirts',
            name: 'substring:Shirt',
            price: 'between:0,5000',
            discount: 'gte:10',
            brand: 'in:Nike,New Balance,Puma',
            color: 'black',
            sort: '-price',
            offset: 15,
            limit: 15
        },
        basedProperties: ['name', 'price', 'discount', 'brand']
        });
    */
    //console.dir(req.query);

    const { query } = req;

    const criteria = querystringConverter.convert({
        query
    });
    console.log('genQueryParameters');
    console.dir(criteria);
    console.log('passed parameters');
    var results = {
        where: criteria.where,
        order: criteria.order,
        limit: criteria.limit,
        group: group,
        attributes: {
            exclude: excludeFields //['openbookingid ', 'totown', 'fromtown']
        }
    }
    console.dir(results);
    return results;
}

function mobile_number_fix(mpesaMobileno) {
    let sendtonumPlus = mpesaMobileno; //str_replace("+","", $mobile_number);
    if (sendtonumPlus == undefined) {
        return;
    }
    let sendtonum = sendtonumPlus.toString().replace("+", "")
        // alert(sendtonum);
    if (sendtonum.length == 9) {
        sendtonum = "254" + sendtonum;
    }
    if (sendtonum.length == 10) {
        sendtonum = "254" + sendtonum.substr(1);
    }
    return sendtonum;
    // return sendtonum;
}

async function sendSMS(tomobileno, textMessage) {
    tomobileno = await mobile_number_fix(tomobileno);
    console.log(tomobileno + ' sendiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing sms');
    console.dir(tomobileno, textMessage);

    var transport = new Transport({ username: 'CrownBus', password: 'Crown1234' });
    // or use Fake Transport for non production environment
    // var transport = new Transport({ fake: false });
    // prepare sms

    var sms = {
        from: 'CrownBus',
        to: tomobileno, //'254700400581',
        text: textMessage, // 'Test SMS.'
    };
    console.dir(sms);
    //send SMS
    transport.sendSingleSMS(sms, function(error, response) {
        console.dir(response.messages[0].status);
        // api.okay(response)
        // this.ok(response, response)

        expect(error).to.be.null;
        expect(response).to.exist;
        expect(response.messages).to.exist;
    });

}

module.exports = {
    ok,
    error,
    genQueryParameters,
    sendSMS
}