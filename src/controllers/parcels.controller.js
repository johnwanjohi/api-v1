import jwt from 'jsonwebtoken';
import api from '../tools/common';
import models from '../config/sequelize';

function list(req, res) {
    var queryParameters = api.genQueryParameters(req, ['']);
    models.waybill_info.findAll(
            queryParameters
        )
        .then((data) => {
            console.log('finding all gotten parcels list');
           //  console.dir(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error ' + e, 500);
        });
}

module.exports = {
    list
};