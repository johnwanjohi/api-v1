const querystringConverter = require('sequelize-querystring-converter');

function ok(res, data) {
    return res.status(200).json({ status: true, 'data': data });

    // return res.status(200).json(data);
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
    console.dir(req.query);

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

module.exports = {
    ok,
    error,
    genQueryParameters
}