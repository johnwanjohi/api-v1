// import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
// import config from '../config/settings';

function list(req, res) {
    console.dir("from town listing ", req.query);
    // models.users.findAll( {attributes: {
    var queryParameters = api.genQueryParameters(req, [''], ['text']);
    models.totownlist.findAll(
            queryParameters
        )
        .then((data) => {
            // console.log('finding all' + req.query.fromtown);
            // console.log(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error ' + e, 500);
        });
}

module.exports = {
    list

};